import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HomeComponent } from './home-component/home.component';
import { ReqDetailsComponent } from './reqdetails-component/reqdetails.component';
import { NotFoundComponent } from './notfound-component/notfound.component';
import { DateMaskDirective } from './shared/directives/date-mask.directive';
import { AppService } from './app.service';

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
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'attendanceApp/reqdetails/:reqid', 
        component: ReqDetailsComponent
      },{
        path:'attendanceApp/reqdetails', 
        component: ReqDetailsComponent
      },{
        path:'attendanceApp/home', 
        component: HomeComponent
      },{
        path:'attendanceApp', 
        component: HomeComponent
      },{
        path:'**', 
        component: NotFoundComponent
      }
    ]),
    BsDatepickerModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
