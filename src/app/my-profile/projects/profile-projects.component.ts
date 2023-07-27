import { Component, OnInit } from '@angular/core';
import { personalProjectsList } from 'src/app/shared/constants';
import { IProject } from 'src/app/shared/interfaces';

@Component({
  selector: 'profile-projects',
  templateUrl: './profile-projects.component.html'
})
export class ProfileProjectsComponent implements OnInit {

  public projectsList: IProject[] = personalProjectsList;
  constructor() { }

  ngOnInit() {
  }

}
