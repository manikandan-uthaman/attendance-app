import { Component } from '@angular/core';
import { AppService } from './app.service';
import { UserDetails } from './shared/model/userDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  userDetails: UserDetails;

  constructor(private _appService: AppService){
    this._appService.getUserDetails().subscribe(result =>{
      this.userDetails = result;
    }, error =>{
      console.error(error);
    });
  }


}
