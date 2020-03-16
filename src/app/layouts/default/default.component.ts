import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sidebarOpened = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  OnToggleSideBar(event) {
    this.sidebarOpened = !this.sidebarOpened;
    console.log(this.sidebarOpened);
  }

}
