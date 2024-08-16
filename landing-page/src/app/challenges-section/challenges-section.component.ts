import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-challenges-section',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './challenges-section.component.html',
})
export class ChallengesSectionComponent {
  challenges = [
    {
      title: 'Gestão e Monitoramento de Recursos Hídricos',
      image: 'assets/images/ico_desafio1.svg',
      texts: [
        'Tecnologias e automação de sistemas irrigados por meio de soluções que visam melhorar a eficiência e eficácia na utilização dos recursos hídricos.',
        'Novas tecnologias relacionadas ao tema deste item.'
      ]
    },
    {
      title: 'Bioprodutos',
      image: 'assets/images/ico_desafio2.svg',
      texts: [
        'Desenvolvimento de bioinsumos de eficiência aumentada para o incremento da produção, da qualidade da produção e/ou proteção de plantas contra estresses bióticos e abióticos, tais como agentes de controle biológico; bioestimulantes; biofertilizantes; condicionadores de ambientes; entre outros.'
      ]
    },
    {
      title: 'Monitoramento de Pragas e Doenças',
      image: 'assets/images/ico_desafio3.svg',
      texts: [
        'Sistemas e/ou novas tecnologias que contribuam para a melhoria da detecção e monitoramento de pragas e doenças, utilizando ou não, inteligência preditiva.'
      ]
    },
    {
      title: 'Máquinas e Implementos Agrícolas',
      image: 'assets/images/ico_desafio4.svg',
      texts: [
        'Interações entre máquina-solo-planta que busquem sistemas produtivos mais eficientes.',
        'Soluções que contribuam para a otimização e melhoria no sistema de colheita de feijão.',
        'Novas tecnologias relacionadas ao tema deste item.'
      ]
    },
    
  ];
}
