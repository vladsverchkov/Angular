import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Task3Component,
    Task4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
