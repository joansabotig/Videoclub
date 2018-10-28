import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../servicios/service1.service';
import { Router } from '@angular/router';
import { Service2Service } from 'src/app/servicios/service2.service';

@Component({
  selector: 'nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.css']
})
export class NuevaPeliculaComponent implements OnInit {

  constructor(private service1: Service1Service,private router: Router, private service2:Service2Service) 
  {
    if(service2.usuario_actual.id!=1)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
  }
  titulo:string;
  descripcion:string;
  imagen:string;
  genero:string;

  ngOnInit() {
  }
  nueva()
  {
    console.log(this.imagen);
    this.service1.nuevaPelicula(this.titulo,this.descripcion,this.imagen,this.genero).subscribe(
      data=>{
        this.router.navigate(['lista_peliculas']);
      },
      err=>console.log(err)
      );
  }

}
