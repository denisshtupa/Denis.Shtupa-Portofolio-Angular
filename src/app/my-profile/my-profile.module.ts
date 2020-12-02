import { ProfileIntroComponent } from './introduction/profile-intro.component';
import { MyProfileService } from './my-profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfileMainComponent, ProfileHeaderComponent } from '.';
import { ProfileFooterComponent } from './footer/profile-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyProfileMainComponent,
    ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileIntroComponent
  ],
  providers: [
    MyProfileService
  ]
})
export class MyProfileModule { }
