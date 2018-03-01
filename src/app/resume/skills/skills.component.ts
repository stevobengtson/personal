import { Component, Input } from '@angular/core';
import { Skill } from '../resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() allSkills: Skill[] = [];
}
