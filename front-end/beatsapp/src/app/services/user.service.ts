import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  // recuperando contactos
  getUsers() {
    return this.http.get('http://localhost:3000/users')
      .map(res => console.log(res.json())
      );
  }

  // add users
  addContact(newUser: User) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user',
      newUser, { headers: headers }).map(res => res.json());
  }


}
