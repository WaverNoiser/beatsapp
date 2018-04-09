import { Injectable, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  // almacenara la ultima respuesta del servidor
  public lastResponse: number;
  headers = new Headers();

  // arreglo de todos los usuarios obtenidos por la BD
  users: User[];

  // notificador del usuario entrante
@Output() enterUser: EventEmitter<String> = new EventEmitter();

  // el usuario actual
  public currentUser: User;
  private user = new Subject();

  constructor(private http: Http) {
    console.log('constructor de service');
    this.lastResponse = -1;
    this.currentUser = new User('');
  }


  // recuperando contactos
  getUsers( cb: ( users ) => any ) {
    /* let users: User[]; */
    return this.http.get('http://localhost:3000/users')
    .subscribe(
      res => {
        cb(  Object.values( res )  );
      }
    );
    }

  // add users
  addUser(newUser: User, cb: (param: number) => any): number {
    this.http.post('http://localhost:3000/user',
      newUser, { headers: this.headers })
      .subscribe(res => {
        // esto devuelve el codigo de la base de datos
        // cuando se intenta agregar un usuario que ya existe
        const lastResponse = res.json();
        if (lastResponse) {
          cb(lastResponse);
        }
      });
    return this.lastResponse;
  }
  // update user's image
  updateImage(cb: (binding) => any) {
    this.http.put('http://localhost:3000/user/updateImageProf',
      {}, { headers: this.headers })
      .subscribe(res => {
        // respuesta
        const lastResponse = res.json();
        if (lastResponse) {
          cb(lastResponse);
        }
      });
  }


// return an especified user
  getUser(nickName: string): Observable <User[]> {
    return this.http.get('http://localhost:3000/user/' + nickName)
    .map( resp => resp.json());
  }

  // set current user
  setCurrentUser(user: User) {
    /* this.currentUser = user;
    this.enterUser.emit(this.currentUser.nickName); */
    this.user.next(user);
    this.currentUser = {...user};
  }

  // para obtener el usuario actual
  getCurrenUser( ) {
    return this.user.asObservable();
  }

}
