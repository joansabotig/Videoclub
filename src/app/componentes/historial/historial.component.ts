import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/servicios/service1.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { Historial } from 'src/app/clases/historial';
import { ActivatedRoute, Router } from '@angular/router';
import { Service2Service } from 'src/app/servicios/service2.service';

@Component({
  selector: 'historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent  {
  peliculas:Pelicula[]=[];
  historial:Historial[]=[];
  historial1:Historial[]=[];

  constructor(private service1:Service1Service,private route: ActivatedRoute, private service2:Service2Service,private router: Router,) 
  {
    if(service2.usuario_actual.id!=this.route.params['value']['id'])
    {
      console.log('No tienes acceso a este perfil');
      this.router.navigate(['']);
    }
    service1.obtenerPeliculas().subscribe(data=>
      {
        this.peliculas = data;
        service1.getHistorial().subscribe(data=>{
          this.historial  = data;
          this.filtrar();
        })
      })
      
  }
  filtrar()
  {
    for(var i =0; i<this.historial.length;i++)
    {
      
      if(this.historial[i].user_id == this.route.params['value']['id'])
      {
        this.historial1.push(this.historial[i]);
      }
    }
  }
  cual(id:number)
  {
    var esta:Pelicula=null;
    for(var i =0; i<this.peliculas.length;i++)
    {
      if(this.peliculas[i].id == id)
      {
        esta=this.peliculas[i];
      }
    }
    return esta;
  }
  go_inicio()
  {
    this.router.navigate(['']);
  }
}
