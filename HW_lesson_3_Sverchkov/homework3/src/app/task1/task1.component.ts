import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }

  arrText: string[] = ["Текст 1", "Текст 2", "Текст 3", "Текст 4", "Текст 5"];
  chosenText: string = "aaa";

  liPressed(event: any) {

    // const resultParagraph = document.querySelector(".result");
    this.chosenText = event.target.innerHTML;
    console.log(this.chosenText);

  }

  ngOnInit(): void {
  }

}
