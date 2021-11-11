import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContadorDosComponent } from './contador-dos/contador-dos.component';
import { contadorComponent } from './contadorUno/contador.component';

@NgModule({
    declarations: [
        contadorComponent,
        ContadorDosComponent
    ],
    exports:[
        contadorComponent,
        ContadorDosComponent
    ],
    imports: [
      CommonModule
    ]
  })

  export class contadorModule{}