import { MyProfileService } from './my-profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfileMainComponent, ProfileHeaderComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyProfileMainComponent,
    ProfileHeaderComponent
  ],
  providers: [
      MyProfileService
  ]
})
export class MyProfileModule { }
