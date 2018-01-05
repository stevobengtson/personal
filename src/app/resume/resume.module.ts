import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceComponent } from './experiences/experience/experience.component';

import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    ResumeComponent,
    SkillsComponent,
    SkillComponent,
    ExperiencesComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ResumeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeModule {}
