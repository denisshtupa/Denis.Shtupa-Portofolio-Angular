import { Component, HostBinding } from '@angular/core';
import { fadeInOutAnimation } from '../shared/animations';

@Component({
  selector: 'my-profile-main',
  templateUrl: './my-profile-main.component.html',
  animations: [fadeInOutAnimation],
})

export class MyProfileMainComponent {
  @HostBinding('@fadeInOut') animation = true;

}
