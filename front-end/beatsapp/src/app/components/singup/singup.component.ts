import { Component,
         OnInit,
         OnChanges,
         EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [ UserService ]
})
export class SingupComponent implements OnInit, OnChanges {

  nickName: string;
  email: string;
  password: string;
  confirm_password: string;

  newUser: User;
  submitted = false;

  // ya esta el usuario en la base de datos?
  public isInDB = true;

  // codigo de la BD para cuando ya existe el usuario o
  // el correo
  ISINDB = 11000;

  constructor( private userService: UserService ) {


  }

  ngOnInit() {
  }

  ngOnChanges() {
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
      const code = this.userService.addUser(this.newUser);
       console.log( code );
       if ( code === this.ISINDB ) {
         console.log( 'esta en la BD');
         this.isInDB = false;
       }
    }
  }

  // valida si el usuario introdujo la misma contraseña en los 2 campos
  isCorrectPassword(pass: string, c_pass: string) {
    return pass === c_pass;
  }


}
