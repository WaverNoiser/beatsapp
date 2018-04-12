import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter
} from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { HttpInterceptorService } from '../../services/http-interceptor.service';
import { Router } from '@angular/router';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [ UserService, HttpInterceptorService ],
  animations: [
    trigger('showAnimation', [
      state('false', style({
        opacity: '0'
      })),
      state('true',   style({
        opacity: '1',
      })),
      transition('false => true', animate('1000ms ease-in')),
      transition('true => false', animate('3000ms 3s ease-out'))
    ])
  ]
})

export class SingupComponent implements OnInit, OnChanges {

  nickName: string;
  email: string;
  password: string;
  confirm_password: string;

  submitted = false;

  // lanza la animación
  show: boolean;

  // ya esta el usuario en la base de datos?
  public isInDB = false;

  // codigo de la BD para cuando ya existe el usuario o
  // el correo
  ISINDB = 11000;

  constructor(
    private userService: UserService,
    interceptor: HttpInterceptorService,
    private router: Router ) {
    this.show = false;
    const next =  {};
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  // agrega el usuario en la base de datos
  addUser(form: NgForm) {
    try {
    const samePass = this.isCorrectPassword(this.password, this.confirm_password);
    if (samePass) {
      let newUser: User;
      newUser = new User(
        form.value.userName,
        form.value.mail,
        form.value.pass);

       this.userService.addUser(newUser, resp => {
        this.isInDB = (Object.values( resp )[0] === 11000);
        if ( !this.isInDB ) {
          this.router.navigate( ['/wallpost'] );
         }
       }
        );
    }
  } catch ( err ) { console.log( err );
   }
}

  // valida si el usuario introdujo la misma contraseña en los 2 campos
  isCorrectPassword(pass: string, c_pass: string) {
    return pass === c_pass;
  }

  // la animacion inició

  animationStarted( $event ) {
  }

  // cuando la animacion terminó

  animationDone( $event ) {
    this.isInDB = false;
  }


}
