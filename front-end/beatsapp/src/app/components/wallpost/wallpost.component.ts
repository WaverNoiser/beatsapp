import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-wallpost',
  templateUrl: './wallpost.component.html',
  styleUrls: ['./wallpost.component.css']
})
export class WallpostComponent implements OnInit {
  userName: any;
  userSuscription: Subscription;

  constructor(public _userService: UserService) {
    this.userName = _userService.currentUser;
    this.userSuscription = this._userService.getCurrenUser().subscribe(
      value => {
        console.log( value );
        this.userName = value;
      }
    );

    _userService.updateImage(
      ( res ) => {
        console.log(res);
       }
    );
  }

  ngOnInit() {
  }

}
