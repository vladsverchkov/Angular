import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenClothesComponent, MenClothesComponent, JacketComponent, TieComponent, TrousersComponent } from './index';

import { RouterModule } from '@angular/router'; // + это

import { routes } from '../app-routing.module'; // добавил ссылку на роуты 

export class AboutRoutingModule { // + это

}

@NgModule({
  declarations: [
    
    WomenClothesComponent,
    MenClothesComponent,
    JacketComponent, 
    TieComponent, 
    TrousersComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // + это
  ],
  exports: [
    RouterModule // + это
  ]
})
export class ClothesModule { }
export class AppModule { }
