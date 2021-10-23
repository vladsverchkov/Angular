import { HtmlAstPath } from '@angular/compiler';
import { asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {

  @ViewChild("main") private parentRef!: ElementRef<HTMLElement>;
  @ViewChild("ul") private ulRef!: ElementRef<HTMLElement>;
  flag: boolean = true;

  public getChildren() {
    
    if (this.flag) {
      this.flag = false;
      const parentElement = this.parentRef.nativeElement;
      const arrayChildren = parentElement.children;

      const ulElement = this.ulRef.nativeElement;
      const arrayLI = ulElement.children;

      for (let i = 0; i < arrayChildren.length; i++) {
        if (arrayChildren[i] == ulElement) {
          for (let el in arrayLI) {
            arrayLI[el].addEventListener("click", function () {
              arrayLI[el].remove();
            })
          }
        }
        else {
          //console.log(arrayChildren[i]);
          arrayChildren[i].addEventListener("click", function () {
            arrayChildren[i].remove();
          });
        }

      }
      
    }

  }


  constructor() {

  }

  ngOnInit(): void {
  }

}
