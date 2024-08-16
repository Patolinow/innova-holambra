import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ChallengesSectionComponent } from "./challenges-section/challenges-section.component";
import { ScheduleSectionComponent } from "./schedule-section/schedule-section.component";
import { RewardsSectionComponent } from "./rewards-section/rewards-section.component";
import { SubscribeSectionComponent } from "./subscribe-section/subscribe-section.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgOptimizedImage, HeroSectionComponent, ChallengesSectionComponent, ScheduleSectionComponent, RewardsSectionComponent, SubscribeSectionComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Holambra concurso inovação';
}
