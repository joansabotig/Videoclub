import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/servicios/service1.service';
import { Historial } from 'src/app/clases/historial';
import { Usuario } from 'src/app/clases/usuario';
import { Pelicula } from 'src/app/clases/pelicula';
import { Service2Service } from 'src/app/servicios/service2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'historial-total',
  templateUrl: './historial-total.component.html',
  styleUrls: ['./historial-total.component.css']
})
export class HistorialTotalComponent {
  historial:Historial[]=[];
  peliculas:Pelicula[]=[];
  users:Usuario[]=[];
  constructor(private service1:Service1Service, private service2:Service2Service,private router: Router) 
  {
    if(service2.usuario_actual.id!=service2.admin)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
      service1.obtenerPeliculas().subscribe (data=>
        {this.peliculas = data
        service2.obtenerUsuarios().subscribe(data=>{this.users = data
          service1.getHistorial().subscribe(data=>{this.historial=data});
        });
        });
      
  }
  quien(id:number)
  {
    var el:Usuario=null;
    for(var i=0;i<this.users.length;i++)
    {
      if(this.users[i].id==id)
      {
        el=this.users[i];
      }
    }
    return el;
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
