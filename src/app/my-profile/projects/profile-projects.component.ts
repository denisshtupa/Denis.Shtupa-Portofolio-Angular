import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-projects',
  templateUrl: './profile-projects.component.html'
})
export class ProfileProjectsComponent implements OnInit {

  public projectsList: IProject[] = [
    {
      name: "Movies by genre & cast", 
      posterUrl: "assets/images/movies_logo.png",
      techStack: [ "Angular 11", "Typescript", "SASS", "movieDb API" ],
      alt: "Movie's logo",
      isLive: true,
      liveDemoUrl: "https://moviedb-denis.herokuapp.com/movie-db/new-movies",
      githubLinkRepo: "https://github.com/denisshtupa/movie-db-app"
    },
    {
      name: "Shopping cart", 
      posterUrl: "assets/images/shopping_cart.png",
      techStack: [ "Angular 10", "Typescript", "Express.js", "SASS", "Angular Bootstrap" ],
      alt: "Shopping cart logo",
      isLive: true,
      liveDemoUrl: "https://shopping-cart-app-ng.herokuapp.com/",
      githubLinkRepo: "https://github.com/denisshtupa/shopping-cart-app"
    },
    {
      name: "Restaurant's review", 
      posterUrl: "assets/images/restaurant_review.png",
      techStack: [ "Vue", "Vuex store", "Vue router", "JEST" ],
      alt: "Restaurnat's review logo",
      isLive: true,
      liveDemoUrl: "https://lunch-places.herokuapp.com/",
      githubLinkRepo: "https://github.com/denisshtupa/lunch-places"
    }, 
    {
      name: "Manage budget", 
      posterUrl: "assets/images/budget_app.png",
      techStack: [ "React.js", "Context API", "CSS" ],
      alt: "Budget's logo",
      isLive: true,
      liveDemoUrl: "https://budget-reactjs-app.herokuapp.com/",
      githubLinkRepo: "https://github.com/denisshtupa/budget-react-app"
    },
    // {
    //   name: "Products list", 
    //   posterUrl: "assets/images/products_list.png",
    //   techStack: [ "React.js", "Context API", "CSS" ],
    //   alt: "Product's logo",
    //   isLive: true,
    //   liveDemoUrl: "https://products-list-reactjs.herokuapp.com/",
    //   githubLinkRepo: "https://github.com/denisshtupa/u4i"
    // },
    {
      name: "Google maps markers",
      posterUrl: "assets/images/google-map.png",
      techStack: [ "Angular 10", "Typescript", "SASS", "JS", "jQuery" ],
      alt: "Google map markers",
      isLive: true,
      liveDemoUrl: "https://google-maps-ng.herokuapp.com/",
      githubLinkRepo: "https://github.com/denisshtupa/google-map-ng"
    },
       
    {
      name: "Rock-Scissors-Paper", 
      posterUrl: "assets/images/rock_paper.png",
      techStack: [ "Angular 8", "Typescript", "CSS", "Angular-material" ],
      alt: "Game's logo",
      isLive: true,
      liveDemoUrl: "https://rock-paper-scissors-game-app.herokuapp.com/game",
      githubLinkRepo: "https://github.com/denisshtupa/rock-paper-scissors-gameapp"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

export interface IProject {
  name: string
  posterUrl: string
  techStack: string[]
  alt: string
  isLive: boolean
  liveDemoUrl: string
  githubLinkRepo: string
  titleLiveDemo?: string
  titleGithubRepo?: string

}
