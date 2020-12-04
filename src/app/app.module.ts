import { MyProfileMainComponent } from './my-profile/my-profile-main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileModule } from './my-profile/my-profile.module';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyProfileMainComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    AppRoutingModule,
    MyProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
