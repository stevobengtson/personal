import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socialNetworks = [
    { name: 'BitBucket', icon: 'bitbucket', url: 'https://bitbucket.org/sbengtson/' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/stevobengtson' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/steven.bengtson' }
  ];
}
