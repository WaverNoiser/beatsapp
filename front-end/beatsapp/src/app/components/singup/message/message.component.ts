import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@Input() thereIsMessage: boolean;
@Input() message: string;

  constructor() {
    this.thereIsMessage = true;
    this.message = 'no hay mensaje';
   }

  ngOnInit() {
  }

}
