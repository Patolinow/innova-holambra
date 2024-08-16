import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-rewards-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewards-section.component.html',
})
export class RewardsSectionComponent {
  rewards = [
    {
      image: 'assets/images/1lugar.svg',
      title: '1º LUGAR',
      description: 'R$ 5.000,00 + troféu'
    },
    {
      image: 'assets/images/2lugar.svg',
      title: '2º LUGAR',
      description: 'R$ 3.000,00 + troféu'
    },
    {
      image: 'assets/images/3lugar.svg',
      title: '3º LUGAR',
      description: 'R$ 2.000,00 + troféu'
    }
    // Adicione mais objetos conforme necessário
  ];
}
