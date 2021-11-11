import { Component } from '@angular/core';

@Component({
    selector: 'contador-component',
    template:`
        <div class="contenedor">
            <h1>{{title}}</h1>

            <button (click)="suma()">+1</button>

            <p>{{numero}}</p>

            <button (click)="restar()">-1</button>

            <h3>Otro contador</h3>

            <button (click)="acumular(+1)">Sumar 1</button>

            <p>{{numero}}</p>

            <button (click)="acumular(-1)">Restar 1</button>

            <hr>
            <button (click)="sumaCinco()">Sumar 5</button>

            <h3>La base es: <strong>{{base}}</strong></h3>

            <button (click)="restarCinco()">Restar 5</button>
        </div>
    `,
    styleUrls: ['./contador.component.css']
  })

  export class contadorComponent{

    title:string = 'Primer Programa';

    numero:number=8;
  
    base:number=5;
  
    suma(){
      this.numero=this.numero+1 ;
    }
  
    restar(){
      this.numero-=1;
    }
  
    acumular(valor:number){
      this.numero+=valor;
    }
  
    sumaCinco(){
      this.base+=5;
    }
  
    restarCinco(){
      this.base-=5;
    }

  }