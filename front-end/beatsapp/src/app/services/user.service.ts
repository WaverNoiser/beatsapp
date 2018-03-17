import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class UserService {

  // almacenara la ultima respuesta del servidor
  public lastResponse: number;


  constructor(private http: Http) {
    this.lastResponse = -1;
  }

  headers = new Headers();

  // recuperando contactos
  getUsers() {
    return this.http.get('http://localhost:3000/users')
      .map(res => console.log(res.json())
      );
  }

  // add users
  addUser( newUser: User, cb: ( param: number ) => any ): number {
    this.http.post('http://localhost:3000/user',
      newUser, { headers: this.headers })
      .subscribe(res => {
        // esto devuelve el codigo de la base de datos
        // cuando se intenta agregar un usuario que ya existe
          const lastResponse = Object.values( Object.values( res.json() )[0] )[0];
          if ( lastResponse ) {
            cb( lastResponse );
          }
       } );
          return this.lastResponse;
        }


  getUser( nickName: string ) {
    return this.http.get('http://localhost:3000/user/' + nickName);
    }


}
