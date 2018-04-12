import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  EventEmitter
 } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Http } from '@angular/http';
import { SigninComponent } from '../signin/signin.component';
import { Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: []
})
export class TopbarComponent implements OnInit, OnChanges, DoCheck {

  isCollapsed: boolean;
  isShown: boolean;

  userName: any;
  userSuscription: Subscription;
  showNameUser = false;

  constructor(public _userService: UserService) {
    console.log('constructor topbar');
    this.userName = _userService.currentUser;
    this.userSuscription = this._userService.getCurrenUser().subscribe(
      value => {
        this.userName = value;
        this.showNameUser = true;
      }
    );
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngDoCheck() {
  }

  collapsing() {
    this.isCollapsed = !this.isCollapsed;
  }

  showMenu() {
    this.isShown = !this.isShown;
  }

  cambiar() {
    this.userName = 'jesus';
  }

  onClickedOutside() {
    this.isShown = false;
  }



}
