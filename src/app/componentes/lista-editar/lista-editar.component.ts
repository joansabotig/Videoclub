import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/servicios/service1.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';
import { Service2Service } from 'src/app/servicios/service2.service';

@Component({
  selector: 'lista-editar',
  templateUrl: './lista-editar.component.html',
  styleUrls: ['./lista-editar.component.css']
})
export class ListaEditarComponent {

  peliculas:Pelicula[]=[];
  constructor(private servicio1:Service1Service,private router: Router, private service2:Service2Service) 
  {
    if(service2.usuario_actual.id!=1)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    this.servicio1.obtenerPeliculas().subscribe(
      data=>{
        this.peliculas=data;
      },
      err=>console.log(err),
    );
  }
  seleccionar(seleccionada: Pelicula)
  {
    this.router.navigate(['/editar_pelicula/' + seleccionada.id]);
  }

 
}
