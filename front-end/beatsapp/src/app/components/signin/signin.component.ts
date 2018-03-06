import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ UserService ]

})
export class SigninComponent implements OnInit {

  constructor( userService: UserService) { }

  ngOnInit() {
  }

}
