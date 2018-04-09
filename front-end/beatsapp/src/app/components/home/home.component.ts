import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]

})
export class HomeComponent implements OnInit {

// experimentando con ngstyle

public color: string;
public size: string;
users: User[];



  constructor( private userService: UserService ) {
  this.users = new Array<User>();
  }
  ngOnInit() {
    this.userService.getUsers( users => {
      const objResUsers = users[0];
      /* console.log(  this.objResUsers ); */
      const array =  JSON.parse( objResUsers );
      array.forEach(element => {
       this.users.push( element );
      });
    } );
  }

  change( colorFont, sizeFont  ): void {
    console.log(colorFont, sizeFont  );
    this.color = colorFont;
    this.size = sizeFont;
  }

}
