import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'; // + это

import { routes } from '../app-routing.module'; // добавил ссылку на роуты 

export class AboutRoutingModule { // + это

}

import { PencilsComponent, SchoolToysComponent } from './index';
@NgModule({
  declarations: [
    PencilsComponent,
    SchoolToysComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // + это
  ],
  exports: [
    RouterModule // + это
  ]
})
export class ChildrenGoodsModule { }
