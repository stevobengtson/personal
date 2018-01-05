import { Component, Input } from '@angular/core';
import { ResumeService, Experience } from '../../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() experience: Experience = {};
  skillColours = [ 'warning', 'secondary', 'primary', 'success', 'danger', 'info', 'light', 'dark' ];

  constructor(private resumeService: ResumeService) {}

  skillColour(index: number): string {
    return this.skillColours[(index % this.skillColours.length)];
  }

  getSkills() {
    return this.experience.skills.map((skillName, index) => {
      return { name: skillName, url: null, colour: this.skillColour(index) };
    });
  }
}
