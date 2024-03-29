import { Component } from '@angular/core';
import { UserCardComponent } from '../shared/user-card/user-card.component';
import { ProjectsComponent } from '../shared/projects/projects.component';
import { ExperienceComponent } from '../shared/experience/experience.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [UserCardComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
