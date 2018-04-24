import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private _userService: UserService ) { }

  ngOnInit() {
  }

  sendImage( input: HTMLInputElement  ) {
    const file = input.files.item(0);
    console.log( 'sending file: ' +   input.files  );
 /*    this._userService.updateImage( file  ,
      res => console.log('respuesta al subir imagen \n' + res)
    );
 */
  }

}
