import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]

})
export class HomeComponent implements OnInit {
users: any;

// experimentando con ngstyle

public color: string;
public size: string;

  constructor( private userService: UserService ) { }

  ngOnInit() {
   /*  this.userService.getUsers().subscribe( users => this.users = users ); */
  }

  change( colorFont, sizeFont  ): void {
    console.log(colorFont, sizeFont  );
    this.color = colorFont;
    this.size = sizeFont;
  }

}
