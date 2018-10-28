import { Component, OnInit } from '@angular/core';
import { Service2Service } from 'src/app/servicios/service2.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { Service1Service } from 'src/app/servicios/service1.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'devolver',
  templateUrl: './devolver.component.html',
  styleUrls: ['./devolver.component.css']
})
export class DevolverComponent {
  peliculas:Pelicula[]=[];
  users:Usuario[]=[];
  constructor(private service1:Service1Service,private router: Router, private service2:Service2Service) 
  {
    if(service2.usuario_actual.id!=1)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    service1.obtenerPeliculas().subscribe(data=>{
      for(var i=0; i<data.length;i++)
      {
        if(data[i].alquilada){ this.peliculas.push(data[i])}
      }
    },
    err=>console.log(err));
    service2.obtenerUsuarios().subscribe(data=>{
      this.users =data;
    },
    err=>console.log(err));
  }
  devolver(peli:Pelicula)
  {
    this.router.navigate(['devolver/'+peli.id]);
  }
  quien(id:number)
  {
    var este:Usuario=null;
    for(var i =0; i<this.users.length; i++)
    {
      if(this.users[i].id==id)
      {
        este = this.users[i]
      }
    }
    return este;
  }

  

}
