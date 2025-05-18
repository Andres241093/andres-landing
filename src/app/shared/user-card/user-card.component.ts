import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  resumePath = '';

  constructor(private readonly _translateService: TranslateService) {}

  ngOnInit(): void {
    this.resumePath = '/assets/docs/'+this.getResumeName();
    this._translateService.onLangChange.subscribe({
      next: (lang: LangChangeEvent) => {
        this.resumePath =
          lang.lang === 'en'
            ? '/assets/docs/english_resume.pdf'
            : '/assets/docs/spanish_resume.pdf';
      },
    });
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  private getResumeName(): 'spanish_resume.pdf' | 'english_resume.pdf' {
    const lang = navigator.languages?.[0] || navigator.language;
    const mainLang = lang.split('-')[0];

    return mainLang === 'es' ? 'spanish_resume.pdf' : 'english_resume.pdf';
  }
}
