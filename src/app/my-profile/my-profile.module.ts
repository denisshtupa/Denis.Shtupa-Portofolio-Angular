import { MyProfileService } from './my-profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfileMainComponent, ProfileHeaderComponent, ProfileFooterComponent, ProfileIntroComponent, ProfileAboutComponent, ProfileExperienceComponent, ProfileProjectsComponent, ProfileEducationComponent, ProfileSkillsComponent, ProfileContactComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyProfileMainComponent,
    ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileIntroComponent,
    ProfileAboutComponent,
    ProfileExperienceComponent,
    ProfileProjectsComponent,
    ProfileEducationComponent,
    ProfileSkillsComponent,
    ProfileContactComponent
  ],
  providers: [
    MyProfileService
  ]
})
export class MyProfileModule { }
