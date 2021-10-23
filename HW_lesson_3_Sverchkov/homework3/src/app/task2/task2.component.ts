import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  @ViewChild("text") paragraphElement: any;

  colorsArray = ['red', 'blue', 'yellow', 'green'];
  flagColor = false;

  elementStyles : any = {
    type: "radio",
    name: "color"
  }

  handleChange(selectedColor: string) {

    for (let i: number = 0; i < this.colorsArray.length; i++) {

      if (this.colorsArray[i] == selectedColor) {
        this.paragraphElement.nativeElement.style.backgroundColor = this.colorsArray[i];
      }

    }
    
  }


  constructor() { 
    // this.paragraphElement = [];
  }

  ngOnInit(): void {
  }

}
