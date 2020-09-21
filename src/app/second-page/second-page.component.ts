import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})


export class SecondPageComponent implements OnInit {

  display = '';

  constructor() { }

  ngOnInit() {
  }

  addDisplay(x){
    if(this.display == ''){
      if(x == '*' || x =='/' || x == '-' || x == '+')
      {}
      else this.display += x;
    }
    else{
      const lastChar = this.display.slice(-1);
      if(x == '*' || x =='/' || x == '-' || x == '+'){
        if(lastChar == '/' || lastChar == '*' || lastChar == '-' || lastChar == '+'){}
        else this.display += x;
      }
      else this.display += x;
    }
  }

  resetDisplay(){
    this.display = '';
  }

  resultadoDisplay(){
    this.display = eval(this.display);
  }

}