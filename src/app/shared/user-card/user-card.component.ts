import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
