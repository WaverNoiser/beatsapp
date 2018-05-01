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

  sendImage(input: HTMLInputElement) {
    /* const fm = new FormData();
    fm.append('imagen', input.files[0]);
    const file = input.files.item(0); */
    console.log('sending file: ' + input.files);
      this._userService.updateImage( input.files[0]  ,
      res => console.log('respuesta al subir imagen \n' + res)
    );

  }

}
