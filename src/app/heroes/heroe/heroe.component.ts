import { Component } from "@angular/core";

@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['./heroe.component.css']

})

export class heroeComponent{
    nombre:string = "Iron man";
    edad:number = 45;

    //Los metodos getters los ve como propiedades
    get CaseNombre():string{
        return this.nombre.toUpperCase();
    }

    //Metodo
    obtenerDatos():string{

        return "El nombre es: "+this.nombre+" Con edad de: "+this.edad;
    }

    public cambiarNombres():void{
        this.nombre="Spiderman";
    }

    public cambiarEdad():void{
        this.edad=30;
    }


}