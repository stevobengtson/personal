import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() experience;
  skillColours = [ 'warning', 'secondary', 'primary', 'success', 'danger', 'info', 'light', 'dark' ];

  skillColour(index: number): string {
    return this.skillColours[(index % this.skillColours.length)];
  }
}
