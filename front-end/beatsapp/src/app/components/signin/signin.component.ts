import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ UserService ]

})
export class SigninComponent implements OnInit {
  public response;

  constructor( private userService: UserService) { }

  ngOnInit() {
  }

  ingresar( nickName: string ) {
    console.log( 'este es el nombre: ', nickName );
    this.userService.getUser( nickName ).subscribe( res => this.response = Object.values( res )[0].length ===  2  );
  }

}
