import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { heroeComponent } from './heroe/heroe.component';
import { NgforComponent } from './ngfor/ngfor.component';



@NgModule({
  declarations: [
    NgforComponent,
    heroeComponent  
  ],
  exports:[
    heroeComponent,
    NgforComponent
  ],
  imports: [
    CommonModule
  ]
})
export class heroesModule { }