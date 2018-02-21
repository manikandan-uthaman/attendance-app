import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'reqdetails',
  templateUrl: './reqdetails.component.html',
  styleUrls: ['./reqdetails.component.css']
})
export class ReqDetailsComponent {
  registrationForm  = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.registrationForm.get('username');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  onBlur(){
    console.log(this.registrationForm.get('username'));
  }
}
