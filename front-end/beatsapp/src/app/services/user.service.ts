import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';
@Injectable()
export class UserService {

  // almacenara la ultima respuesta del servidor
  public lastResponse: any;
  value = [];

  constructor(private http: Http) {
  }

  // recuperando contactos
  getUsers() {
    return this.http.get('http://localhost:3000/users')
      .map(res => console.log(res.json())
      );
  }

  // add users
  addUser( newUser: User ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/user',
      newUser, { headers: headers })
      .subscribe(res => { this.value = Object.values( res );
       } );
       console.log( this.value );
        }


}
