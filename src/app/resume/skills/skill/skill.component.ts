import { Component, Input } from '@angular/core';
import { Skill } from '../../resume.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() type = 'list-item';
  @Input() skill: Skill;
}
