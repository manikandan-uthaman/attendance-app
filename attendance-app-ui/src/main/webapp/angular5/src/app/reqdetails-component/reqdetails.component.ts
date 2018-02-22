import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'reqdetails',
  templateUrl: './reqdetails.component.html',
  styleUrls: ['./reqdetails.component.css']
})
export class ReqDetailsComponent implements OnInit{
  requestForm: FormGroup;

  bsConfig: Partial<BsDatepickerConfig>;

  minDate: Date;

  reqid: any;

  constructor(private _route: ActivatedRoute){
    this.bsConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
    this.minDate = new Date();
  }

  ngOnInit(){
    this._route.paramMap.subscribe(params => {
      this.reqid = params.get('reqid');
    });
    if(this.reqid){
      // call backend, get request details and populate the form
      this.requestForm  = new FormGroup({
        appliedBy: new FormControl({value: 'User1', disabled: true}),
        leaveCategory: new FormControl('2'),
        fromDate: new FormControl('03/03/2018', Validators.required),
        toDate: new FormControl('04/04/2018', Validators.required),
        remarks: new FormControl('Casual Leave')
      });      
    }else{
      this.requestForm  = new FormGroup({
        appliedBy: new FormControl({value: 'User1', disabled: true}), // Populate user name always
        leaveCategory: new FormControl(),
        fromDate: new FormControl('', Validators.required),
        toDate: new FormControl('', Validators.required),
        remarks: new FormControl()
      });
    }
  }

  get appliedby(){
    return this.requestForm.get('appliedBy');
  }

  get leavecategory(){
    return this.requestForm.get('leaveCategory');
  }

  get fromdate(){
    return this.requestForm.get('fromDate');
  }

  get todate(){
    return this.requestForm.get('toDate');
  }

  get remarks(){
    return this.requestForm.get('remarks');
  }

  onblur(){
    console.log(this.requestForm)
  }

  onSubmit(){

    if(!this.fromdate.value){
      this.fromdate.markAsTouched();
      this.fromdate.setErrors({
        required: true
      });
    }

    if(!this.todate.value){
      this.todate.markAsTouched();
      this.todate.setErrors({
        required: true
      });
    }

    if(this.fromdate.value && this.todate.value){
       let from: Date = this.fromdate.value;
       let to: Date = this.todate.value;
       if(to<from){
        this.todate.markAsTouched();
        this.todate.setErrors({
          invalidRange: true
        });
       }
    }

    if(!this.leavecategory.value){
      this.leavecategory.markAsTouched();
      this.leavecategory.setErrors({
        required: true
      });
    }
  }
}
