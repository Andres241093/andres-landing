import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private readonly _translate: TranslateService) {
    this._translate.addLangs(['en', 'es']);
    this._translate.setDefaultLang('en');

    const browserLang = this._translate.getBrowserLang();
    this._translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
  }
}
