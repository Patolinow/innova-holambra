import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-section.component.html',
})
export class ScheduleSectionComponent {
  scheduleItems = [
    {
      date: '19/04',
      text: 'Lançamento e palestra'
    },
    {
      date: '19/04 a 19/05',
      text: 'Inscrições'
    },
    {
      date: '07/06',
      text: 'Pitch Day e seleção das propostas para a segunda etapa'
    },
    {
      date: '12/06',
      text: 'Divulgação das propostas selecionadas'
    },
    {
      date: 'A partir de 14/06',
      text: 'Mentorias e desenvolvimento das iniciativas'
    },
    {
      date: '28/06',
      text: 'Visita técnica'
    },
    {
      date: '30/08',
      text: 'Pitch Day final, divulgação do ranking e evento de premiação'
    },
    
  ];
}
