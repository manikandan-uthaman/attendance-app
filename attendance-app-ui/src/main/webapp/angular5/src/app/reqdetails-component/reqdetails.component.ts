import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'reqdetails',
  templateUrl: './reqdetails.component.html',
  styleUrls: ['./reqdetails.component.css']
})
export class ReqDetailsComponent {
  requestForm  = new FormGroup({
    appliedBy: new FormControl(),
    leaveCategory: new FormControl(),
    fromDate: new FormControl(),
    toDate: new FormControl(),
    remarks: new FormControl()
  });

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(){
    this.bsConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
  }

  get appliedby(){
    return this.requestForm.get('appliedby');
  }

  get leavecategory(){
    return this.requestForm.get('leavecategory');
  }

  get fromdate(){
    return this.requestForm.get('fromdate');
  }

  get todate(){
    return this.requestForm.get('todate');
  }

  get remarks(){
    return this.requestForm.get('remarks');
  }

  onblur(){
    console.log(this.requestForm)
  }
}
