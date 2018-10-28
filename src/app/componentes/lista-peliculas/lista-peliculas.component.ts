import { Component} from '@angular/core';
import { Service1Service } from '../../servicios/service1.service';
import { Router } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent {
  peliculas:Pelicula[]=[];
  constructor(private servicio1:Service1Service,private router: Router) 
  {
    this.servicio1.obtenerPeliculas().subscribe(
      data=>{
        this.peliculas=data;
      },
      err=>console.log(err),
    );
  }
  seleccionar(seleccionada: Pelicula)
  {
    this.router.navigate(['/alquilar/' + seleccionada.id]);
  }

  

}
