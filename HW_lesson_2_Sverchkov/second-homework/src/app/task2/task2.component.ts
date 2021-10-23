import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  firstImage: string = "/assets/1.jpg";
  secondImage: string = "/assets/2.webp";
  imageWidth: number = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
