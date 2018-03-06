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
  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( users => this.users = users );
  }

}
