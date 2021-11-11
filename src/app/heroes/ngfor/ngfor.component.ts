import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  heroes:string[] = ["Iron man","Spiderman", "Hulk"];

  resultado:any;

  edad:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe():void{

    this.resultado = this.heroes.shift();
    
    
  }

  public incrementarEdad():void{

    this.edad+=1;
  }
  
}
