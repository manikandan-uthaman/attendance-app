import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notfound',
  template: `
  <h1 style="width: 50%;margin-top: 10px;">
    Page not found!
  </h1>
  `
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
