import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HomeComponent } from './home-component/home.component';
import { ReqDetailsComponent } from './reqdetails-component/reqdetails.component';
import { NotFoundComponent } from './notfound-component/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    ReqDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'reqdetails', 
        component: ReqDetailsComponent
      },{
        path:'home', 
        component: HomeComponent
      },{
        path:'', 
        component: HomeComponent
      },{
        path:'**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
