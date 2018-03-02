import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  nickName: string;
  email: string;
  password: string;
  confirm_password: string;

  newUser: User;

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    const samePass = this.isCorrectPassword( this.password, this.confirm_password );
    if ( samePass ) {
    this.newUser.nickName = this.nickName;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    }
  }

  isCorrectPassword( pass: string, c_pass: string ) {
    console.log( pass === c_pass );
    const isCorrect = pass === c_pass;
    return isCorrect;
  }

}
