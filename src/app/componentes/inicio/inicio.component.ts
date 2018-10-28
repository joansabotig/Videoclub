import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../../servicios/service2.service';
import { Pelicula } from '../../clases/pelicula';
import { Service1Service } from '../../servicios/service1.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  imagenes:string[]=[];
  pelis:Pelicula[]=[];
  imagen_activa:string = null;
  activada:number;
 
  constructor(private service1: Service1Service) {
    
   

    this.service1.obtenerPeliculas().subscribe(data=>{
      this.pelis = data;
      this.imagen_activa = this.pelis[0].imagen;
      this.activada=0;

      for(var i=0; i<this.pelis.length;i++)
    {
      this.imagenes.push(this.pelis[i].imagen);
    }
    },
    err=>console.log(err));
    this.clock();
   }
   next()
   {
     if(this.activada < this.imagenes.length-1)
     {
      this.imagen_activa = this.imagenes[this.activada+1];
      this.activada++;
     }
     else
     {
      this.imagen_activa = this.imagenes[0];
      this.activada=0;
     }
   }
   clock()
   {
    setTimeout(() =>{
      this.next();
      this.clock();
    }, 3000);
    
   }
   prev()
   {
    if(this.activada < 1)
     {
      this.imagen_activa = this.imagenes[this.imagenes.length-1];
      this.activada=this.imagenes.length-1;
     }
     else
     {
      this.imagen_activa = this.imagenes[this.activada-1];
      this.activada--;
     }
   }

   

  



}
