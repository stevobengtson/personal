import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() allSkills = [];

  skills = [
    { name: 'ASP .NET', url: 'https://www.asp.net' },
    { name: 'Ruby on Rails', url: 'http://rubyonrails.org' },
    { name: 'Angular', url: 'http://angular.io' },
    { name: 'Javascript', url: 'http://www.javascript.com' },
    { name: 'jQuery', url: 'http://jquery.com' },
    { name: 'Bootstrap', url: 'http://getbootstrap.com' },
    { name: 'Postgres', url: 'http://www.postgresql.org' },
    { name: 'PHP', url: 'http://php.net' },
    { name: 'Symfony', url: 'http://symfony.com/' },
    { name: 'WebRTC', url: 'http://webrtc.org' },
    { name: 'Pusher', url: 'http://pusher.com' },
    { name: 'Paper.js', url: 'http://paperjs.org' },
    { name: 'HTML/CSS', url: 'http://www.w3.org/html/' },
    { name: 'Prototype', url: 'http://prototype.org' },
    { name: 'SVG', url: 'http://www.w3.org/Graphics/SVG/' }
  ];

  skillUrl(skillName: string) {
    const foundSkill = this.skills.find((skill) => skill.name.toLowerCase() === skillName.toLowerCase());
    return foundSkill ? foundSkill.url : '#';
  }
}
