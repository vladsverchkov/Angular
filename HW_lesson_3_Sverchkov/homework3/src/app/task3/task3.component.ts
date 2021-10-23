import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  currencyPipe : number = 764;
  datePipe : Date = new Date();
  decimalPipe : number = 3.14159265;
  jsonPipe : Object = { 
    moo: 'foo', 
    goo: { too: 'new' }
  };
  lowerCasePipe : string = "LOWER CASE PIPE";
  upperCasePipe : string = "Upper Case Pipe";
  percentPipe : number = 0.1756;
  slicePipe : number[] = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit(): void {
  }

}
