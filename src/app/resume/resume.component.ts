import { Component, OnInit  } from '@angular/core';

import { ResumeService, Experience, Skill } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  experiences: Experience[];

  socialNetworks = [
    { name: 'BitBucket', icon: 'bitbucket', url: 'https://bitbucket.org/sbengtson/' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/stevobengtson' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/steven.bengtson' }
  ];

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.experiences = this.resumeService.getExperiences();
  }

  allSkills(): Skill[] {
    return this.resumeService.getAllSkills();
  }
}
