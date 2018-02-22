import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HomeComponent } from './home-component/home.component';
import { ReqDetailsComponent } from './reqdetails-component/reqdetails.component';
import { NotFoundComponent } from './notfound-component/notfound.component';
import { DateMaskDirective } from './shared/directives/date-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    ReqDetailsComponent,
    DateMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'reqdetails/:reqid', 
        component: ReqDetailsComponent
      },{
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
    ]),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
