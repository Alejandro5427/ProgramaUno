import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-dos',
  templateUrl: './contador-dos.component.html',
  styleUrls: ['./contador-dos.component.css']
})
export class ContadorDosComponent implements OnInit {

  nombre:string ="Alex";
  edad:number=3;
  datos:string[]=["alex@gamil.com", "Mexico"];

  constructor() { }

  ngOnInit(): void {
  }

  sumarEdad(){
    this.edad = this.edad+1
  }

  restarEdad(){

    this.edad-=1;
  }

}
