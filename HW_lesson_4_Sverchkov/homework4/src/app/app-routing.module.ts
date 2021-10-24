import { NgModule, SkipSelf } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import { JacketComponent } from './men-clothes/jacket/jacket.component';

import { Task1Component } from './task1/task1.component';
import { MenClothesComponent } from './men-clothes/men-clothes.component';
import { WomenClothesComponent } from './women-clothes/women-clothes.component';


import { PencilsComponent } from './pencils/pencils.component';
import { SchoolToysComponent } from './school-toys/school-toys.component';

import { JacketComponent, LongstockingsComponent, SkirtComponent, TieComponent, TrousersComponent } from './clothes';
import { ElectronicToysComponent, SoftToysComponent, 
         BoldPencilsComponent, ColourPencilsComponent, GraphitePencilsComponent } from './children-goods';





export const routes: Routes = [
  {path: "task1", component: Task1Component},
  {path: 'women-clothes', component: WomenClothesComponent},

  { path: 'men-clothes', component: MenClothesComponent,
    children: [
      { path: 'jacket', component: JacketComponent },
      { path: 'tie', component: TieComponent},
      { path: 'trousers', component: TrousersComponent}
    ]   
  },
 
  {path: 'pencils', component: PencilsComponent,
   children: [
     { path: 'bold-pencils', component: BoldPencilsComponent }, 
     { path: 'colour-pencils', component: ColourPencilsComponent },
     { path: 'graphite-pencils', component: GraphitePencilsComponent }
   ]},

  { path: 'toys', 
    component: SchoolToysComponent,
    children: [
      {path: 'electronic-toys', component: ElectronicToysComponent},
      {path: 'soft-toys', component: SoftToysComponent}
    ]
  },

  {path: 'women-clothes', component: WomenClothesComponent,
    
    children: [
      {path: 'longstockings', component: LongstockingsComponent},
      {path: 'skirt', component: SkirtComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [Task1Component];
