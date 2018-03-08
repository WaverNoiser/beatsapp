import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [ UserService ]
})
export class SingupComponent implements OnInit {

  nickName: string;
  email: string;
  password: string;
  confirm_password: string;

  newUser: User;
  submitted = false;

  constructor( private userService: UserService ) {
  }

  ngOnInit() {
  }

  // agrega el usuario en la base de datos
  addUser() {
    const samePass = this.isCorrectPassword(this.password, this.confirm_password);
    if (samePass) {
      this.newUser = new User(
        this.nickName,
        this.email,
        this.password);

      this.newUser.nickName = this.nickName;
      this.newUser.email = this.email;
      this.newUser.password = this.password;
    console.log( this.userService.addUser( this.newUser ) );

    }
  }

  // valida si el usuario introdujo la misma contraseña en los 2 campos
  isCorrectPassword(pass: string, c_pass: string) {
    return pass === c_pass;
  }

}
