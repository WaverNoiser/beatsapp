import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isCollapsed: boolean;
  constructor() { }

  ngOnInit() {
  }

  collapsing() {
    this.isCollapsed = !this.isCollapsed;
  }

}
