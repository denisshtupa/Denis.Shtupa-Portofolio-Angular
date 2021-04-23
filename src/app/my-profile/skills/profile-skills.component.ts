import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile-skills',
    templateUrl: './profile-skills.component.html'
})
export class ProfileSkillsComponent implements OnInit {

    public skillsListFE: ISkills[] = [
        { id: 1, skill: "Angular v2-11", value: 90, percentage: "90%" },
        { id: 2, skill: "Typescript", value: 90, percentage: "90%" },
        { id: 7, skill: "Javascript", value: 90, percentage: "90%" },
        { id: 3, skill: "HTML", value: 90, percentage: "90%" },
        { id: 4, skill: "CSS", value: 90, percentage: "90%" },
        { id: 5, skill: "React.js", value: 85, percentage: "85%" },
        { id: 6, skill: "Sass", value: 85, percentage: "85%" },
        { id: 9, skill: "jQuery", value: 80, percentage: "80%" },
        { id: 10, skill: "GIT", value: 80, percentage: "80%" },
        { id: 8, skill: "Vue.js", value: 75, percentage: "75%" },
    ];

    public skillsListBE: ISkills[] = [
        { id: 2, skill: "SQL", value: 80, percentage: "80%" },
        { id: 3, skill: "C#", value: 80, percentage: "80%" },
        { id: 4, skill: ".NET Core", value: 80, percentage: "80%" },
        { id: 10, skill: "Node.js", value: 70, percentage: "70%" },
        { id: 5, skill: "Entity Framework", value: 70, percentage: "70%" },
        { id: 6, skill: "MVC5", value: 65, percentage: "65%" },
        { id: 9, skill: "Microsoft Azzure", value: 65, percentage: "65%" },
        { id: 7, skill: "Amazon Web Services", value: 50, percentage: "50%" },
        { id: 8, skill: "Docker", value: 50, percentage: "50%" },
    ];

    constructor() {

    }

    ngOnInit() {
    }

    public calculateClassOfProgressBar(value: number): string {
        if (value >= 90) {
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



export interface ISkills {
    id: number
    skill: string
    value: number
    percentage: string
}
