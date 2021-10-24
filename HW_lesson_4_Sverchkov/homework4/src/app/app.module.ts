import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenClothesComponent } from './clothes';

//импорт моих модулей
import { ChildrenGoodsModule } from './children-goods/children-goods.module';
import {ClothesModule } from './clothes/clothes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildrenGoodsModule,
    ClothesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
