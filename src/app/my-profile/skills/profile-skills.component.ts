import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-skills',
  templateUrl: './profile-skills.component.html'
})
export class ProfileSkillsComponent implements OnInit {

    public skillsListFE: ISkills[] = [
        { id: 1, skill: "Angular v2-11", value: 100, percentage: "100%"},
        { id: 2, skill: "Typescript", value: 100, percentage: "100%"},
        { id: 3, skill: "HTML", value: 100, percentage: "100%"},
        { id: 4, skill: "CSS", value: 100, percentage: "100%"},
        { id: 5, skill: "Sass", value: 95, percentage: "95%"},        
        { id: 6, skill: "Javascript", value: 90, percentage: "90%"},
        { id: 7, skill: "React.js", value: 85, percentage: "85%"},
        { id: 8, skill: "Vue.js", value: 85, percentage: "85%"},
        { id: 9, skill: "jQuery", value: 80, percentage: "80%"},
        { id: 10, skill: "Node.js", value: 75, percentage: "75%"}
    ];

    public skillsListBE: ISkills[] = [
        { id: 1, skill: "GIT", value: 100, percentage: "100%"},
        { id: 2, skill: "SQL", value: 85, percentage: "85%"},
        { id: 3, skill: "C#", value: 85, percentage: "85%"},
        { id: 4, skill: ".NET Core", value: 85, percentage: "85%"},
        { id: 5, skill: "Entity Framework", value: 80, percentage: "80%"},
        { id: 6, skill: "MVC5", value: 70, percentage: "70%"},
        { id: 7, skill: "Amazon Web Services", value: 65, percentage: "65%"},
        { id: 8, skill: "Docker", value: 65, percentage: "65%"},
        { id: 9, skill: "Microsoft Azzure", value: 65, percentage: "65%"},
    ];    

  constructor() {

  }

  ngOnInit() {
  }

  public calculateClassOfProgressBar(value: number): string {
    if(value >= 90) {
        return "bg-success"
    } else if (value >= 80 && value < 90) {
        return "bg-info"
    } else if (value >= 70 && value < 80) {
        return ""
    } else if (value >= 60 && value < 70) {
        return "bg-warning"
    } else {
        return ""
    }
  }

}



export interface ISkills{
    id: number
    skill: string
    value: number
    percentage: string
}
