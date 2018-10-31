import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { Service1Service } from '../../servicios/service1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service2Service } from 'src/app/servicios/service2.service';

@Component({
  selector: 'mod-pelicula',
  templateUrl: './mod-pelicula.component.html',
  styleUrls: ['./mod-pelicula.component.css']
})
export class ModPeliculaComponent  {
  actual:Pelicula;
  bandera:boolean= false;
  titulo:string;
  descripcion:string;
  imagen:string;
  genero:string;
  constructor(private servicio1:Service1Service,private router: Router,private route: ActivatedRoute,private service2:Service2Service) {
    if(service2.usuario_actual.id!=service2.admin)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    servicio1.obtenerPelicula(route.params['value']['id']).subscribe(
      data=>{
        this.actual = data;
        this.bandera=true;
        this.titulo = data.titulo;
        this.descripcion = data.descripcion;
        this.imagen = data.imagen;
        this.genero = data.genero;
      },
      err=>console.log(err)
    );
  }
  eliminar()
  {
    this.servicio1.eliminar(this.actual.id).subscribe(data=>{this.router.navigate(['']);});
  }
  modificar()
  {
    this.servicio1.modificar(this.actual,this.titulo,this.descripcion,this.imagen,this.genero).subscribe(
      data=>
      {
        this.actual = null;
        this.router.navigate(['lista_peliculas']);
      },
      err=>console.log(err)
    );
  }

  
  
  

}
