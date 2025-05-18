import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../shared/user-card/user-card.component';
import { ProjectsComponent } from '../shared/projects/projects.component';
import { ExperienceComponent } from '../shared/experience/experience.component';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [UserCardComponent, ProjectsComponent, ExperienceComponent, NgClass],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  currentLang = '';

  constructor(private readonly _translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.getLang();
    this._translateService.onLangChange.subscribe({
      next: (lang: LangChangeEvent) => (this.currentLang = lang.lang),
    });
  }

  changeLang(lang: string): void {
    this._translateService.use(lang);
  }

  private getLang(): 'es' | 'en' {
    const lang = navigator.languages?.[0] || navigator.language;
    const mainLang = lang.split('-')[0];

    return mainLang === 'es' ? 'es' : 'en';
  }
}
