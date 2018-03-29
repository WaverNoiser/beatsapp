import {
  Component,
  OnInit,
  OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: [UserService]
})
export class TopbarComponent implements OnInit, OnChanges {

  isCollapsed: boolean;
  isShown: boolean;

  userName;
  constructor( private _userService: UserService ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('onchange');
  }

  collapsing() {
    this.isCollapsed = !this.isCollapsed;
  }

  showMenu() {
    this.isShown = !this.isShown;
  }



}
