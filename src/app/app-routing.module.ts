import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/resume', pathMatch: 'full' },
  { path: 'resume', loadChildren: 'app/resume/resume.module#ResumeModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
