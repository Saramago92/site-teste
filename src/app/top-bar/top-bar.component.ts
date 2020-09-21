import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations: [
     
  ]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}