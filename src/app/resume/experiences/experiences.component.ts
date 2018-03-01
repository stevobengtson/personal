import { Component, Input } from '@angular/core';
import { Experience } from '../resume.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  @Input() experiences: Experience[] = [];
}
