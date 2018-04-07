import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ TopbarComponent]
})

export class SigninComponent implements OnInit {
  public existUser = true;
  public currentUser: User;

  constructor(private userService: UserService, private router: Router, private tc: TopbarComponent )  {
   console.log( 'constructor singin' );

  }

  ngOnInit() {
  }

  ingresar(nickName: string, password: string) {
    let user;
    this.userService.getUser(nickName).subscribe(resUser => {
      // el usuario devuelto por la DB
      user = resUser;

      /* si los datos del que intenta acceder son iguales a los de
     traidos por la BD en funcion al 'nickName' */
        this.existUser = (this.equals(user[0].password, password));
        if (this.existUser) {
          const nameUser: any = Object.values(user[0])[2];
          console.log(nameUser);

          /* this.tc._userService.enterUser.emit(nameUser); */
          this.currentUser = user[0];
          this.router.navigate(['/wallpost']);
        }
    },
    error => {},
    () => {
      this.userService.setCurrentUser(user[0]);
    }
  );
  }

  // funcion para determinar si una cadena es igual a la otra

  equals(str1: string, str2: string): boolean {
    if (str1.indexOf(str2) !== -1) {
      if (str1.length === str2.length) {
        return true;
      }
    }
    return false;
  }

}
