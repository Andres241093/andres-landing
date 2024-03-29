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
  resumePath = '/assets/docs/english_resume.pdf';

  constructor(private readonly _translateService: TranslateService) {}

  ngOnInit(): void {
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
}
