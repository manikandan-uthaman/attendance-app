import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from '../shared/model/userDetails';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userDetails: UserDetails;

  constructor() { }

  ngOnInit() {
  }

}