import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  
  btnForward = document.querySelector(".forward");
  btnBackward = document.querySelector(".backward");

  imageArray: string[] = ["/assets/1.jpg", "/assets/2.webp", "/assets/3.jpg"];
  i: number = 0;
  currentImage: string = this.imageArray[this.i];

  forward() {
    
      if (this.imageArray[this.i + 1]) {
        this.currentImage = this.imageArray[this.i+1];
        this.i++;
      }
      else {
        this.i = 0;
        this.currentImage = this.imageArray[this.i];
      }

  }

  backward() {
    
    if (this.imageArray[this.i - 1]) {
      this.currentImage = this.imageArray[this.i-1];
      this.i--;
      console.log(this.i);
    }
    else {
      this.i = this.imageArray.length - 1;
      this.currentImage = this.imageArray[this.i];
      console.log(this.i);
    }
}

@HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.key === 'ArrowRight') {
      this.forward();
    }

    if (event.key === 'ArrowLeft') {
      this.backward();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}


