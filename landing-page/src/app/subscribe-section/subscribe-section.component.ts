import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-subscribe-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscribe-section.component.html',
})
export class SubscribeSectionComponent implements OnInit {
  subscribeForm!: FormGroup;
  // I'm keeping the names of every variable directly related to the form in portuguese because the API returns the names in portuguese
  estados: any[] = [];
  cidades: any[] = [];
  isLoading = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      sobrenome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      cep: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });

    this.loadStates();

    this.subscribeForm
      .get('cep')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        if (this.subscribeForm.get('cep')?.valid) {
          this.searchCep(value);
        }
      });

    this.subscribeForm.get('estado')?.valueChanges.subscribe((estado) => {
      this.loadCities(estado);
    });
  }

  loadStates(): void {
    this.http
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .subscribe(
        (data: any) => {
          this.estados = data.sort((a: any, b: any) =>
            a.nome.localeCompare(b.nome)
          );
        },
        (error) => {
          console.error('Erro ao carregar os estados:', error);
        }
      );
  }

  loadCities(estadoSigla: string): void {
    this.http
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSigla}/municipios`
      )
      .subscribe(
        (data: any) => {
          this.cidades = data.sort((a: any, b: any) =>
            a.nome.localeCompare(b.nome)
          );
        },
        (error) => {
          console.error('Erro ao carregar as cidades:', error);
        }
      );
  }

  searchCep(cep: string): void {
    this.isLoading = true;
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
      (data: any) => {
        // console.log('Dados retornados:', data);
        if (data.erro) {
          this.subscribeForm.patchValue({
            endereco: '',
            bairro: '',
            cidade: '',
            estado: '',
          });
        } else {
          this.subscribeForm.patchValue({
            endereco: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        }
        this.isLoading = false;
        this.enableAddressFields();
      },
      (error) => {
        console.error('Erro na consulta do CEP:', error);
        this.isLoading = false;
        this.enableAddressFields();
      }
    );
  }

  enableAddressFields(): void {
    this.subscribeForm.get('endereco')?.enable();
    this.subscribeForm.get('bairro')?.enable();
    this.subscribeForm.get('cidade')?.enable();
    this.subscribeForm.get('estado')?.enable();
  }

  onSubmit(): void {
    if (this.subscribeForm.valid) {
      console.log('Sucesso!');
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.subscribeForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    if (control?.hasError('minlength')) {
      return `Mínimo de ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    if (control?.hasError('maxlength')) {
      return `Máximo de ${control.errors?.['maxlength'].requiredLength} caracteres`;
    }
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }
    return '';
  }
}
