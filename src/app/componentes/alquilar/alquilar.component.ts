import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../servicios/service1.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';
import { Service2Service } from 'src/app/servicios/service2.service';

@Component({
  selector: 'alquilar',
  templateUrl: './alquilar.component.html',
  styleUrls: ['./alquilar.component.css']
})
export class AlquilarComponent{
  actual:Pelicula;
  bandera:boolean= false;
  constructor(private servicio1:Service1Service,private router: Router,private route: ActivatedRoute, private service2:Service2Service) {
    servicio1.obtenerPelicula(route.params['value']['id']).subscribe(
      data=>{
        this.actual = data;
        this.bandera=true;
      },
      err=>console.log(err)
      
    );
  }
  alquilar()
  {
    if(this.service2.usuario_actual.estado == 'sin alquiler')
    {
      this.servicio1.alquilar(this.actual, this.service2.usuario_actual.id).subscribe(
        data=>
        {
          this.service2.usuario_actual.estado = 'con alquiler';
          this.service2.alquilar(this.service2.usuario_actual.id);
        },
        err=>console.log(err)
      );
      this.servicio1.addhistorial(this.actual.id,this.service2.usuario_actual.id).subscribe(
        data=>{},
        err=>console.log(err));
    }
    else
    {
      console.log('Usted ya tiene una pelicula alquilada')
    }
    
  }
  terminar() {
    this.actual = null;
    this.router.navigate(['lista_peliculas']);
  }


  
}
