import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/servicios/service1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { Service2Service } from 'src/app/servicios/service2.service';

@Component({
  selector: 'devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css']
})
export class DevolucionComponent{
  actual:Pelicula;
  bandera:boolean=false;
  puntuacion:number =5;
  constructor(private servicio1: Service1Service,private route: ActivatedRoute,private router: Router, private service2:Service2Service) { 
    if(service2.usuario_actual.id!=1)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    servicio1.obtenerPelicula(route.params['value']['id']).subscribe(
      data=>{
        this.actual = data;
        this.bandera=true;
      },
      err=>console.log(err)
    );
  }
  devolver()
  {
    this.servicio1.devolver(this.actual,this.puntuacion).subscribe(data=>{
      this.router.navigate(['/admin']);
    },
    err=>console.log(err));
  }
}
