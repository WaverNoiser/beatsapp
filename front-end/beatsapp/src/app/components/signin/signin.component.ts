import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})

export class SigninComponent implements OnInit {
  public existUser = true;

  // el usuario que ha ingresado
  user: Observable<User>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  ingresar(nickName: string, password: string) {
    let obj;
    this.userService.getUser(nickName).subscribe(resUser => {

      // el usuario devuelto por la DB
      obj = JSON.parse(Object.values(resUser)[0]);


      /* si los datos del que intenta acceder son iguales a los de
     traidos por la BD en funcion al 'nickName' */
      try {
        this.existUser = (obj[0].nickName === nickName) && (this.equals(obj[0].password, password));
        if (this.existUser) {
          console.log('debe ser solo nombre: ', obj[0].nickName);
           const user = new User( obj[0].nickName );
          this.userService.setCurrentUser(user);
          this.router.navigate(['/wallpost']);
        }
      } catch (err) {
        this.existUser = false;
      }
    });
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
