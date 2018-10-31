import { Component} from '@angular/core';
import { Service2Service } from 'src/app/servicios/service2.service';
import { Router } from '@angular/router';
import { Service1Service } from 'src/app/servicios/service1.service';
import { Usuario } from 'src/app/clases/usuario';
import { Pelicula } from 'src/app/clases/pelicula';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  usuarios:Usuario[]=[];
  peliculas:Pelicula[]=[];
  mejor_peli:string='';
  activos:number=0;
  alquiladas:number=0;
  nuevas:number=0;
  porc_activos:number=0;
  porc_alquiladas:number=0;
  porc_nuevas:number=0;

  constructor(private service2:Service2Service,private router: Router, private service1:Service1Service) 
  {
    
    if(service2.usuario_actual.id!=service2.admin)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    service1.obtenerPeliculas().subscribe(data=>{
      this.peliculas = data;
      this.getMejorPeli();
      this.getAlquiladas();
      this.getNuevas();
      this.porc_alquiladas = (this.alquiladas/this.peliculas.length)*100;
      this.porc_nuevas = (this.nuevas/this.peliculas.length)*100;
      this.setBarrasPelis();

    });
    service2.obtenerUsuarios().subscribe(data=>{
      this.usuarios = data;
      this.getActivos();
      this.porc_activos=( this.activos/ this.usuarios.length)*100;
      this.setBarrasusers()
    });
  }
  setBarrasPelis()
  {
    document.getElementById('002').style.width=this.porc_alquiladas.toString().concat('%');
    document.getElementById('003').style.width=this.porc_nuevas.toString().concat('%');
  }
  setBarrasusers()
  {
    document.getElementById('001').style.width=this.porc_activos.toString().concat('%');
  }
  getMejorPeli()
  {
    var mayor=0;
    for(var i=0; i<this.peliculas.length;i++)
    {
      if(this.peliculas[i].valoracion > mayor)
      {
        mayor = this.peliculas[i].valoracion;
        this.mejor_peli = this.peliculas[i].titulo;
      }
    }
  }
  getActivos()
  {
    this.activos=0;
    for(var i =0; i<this.usuarios.length;i++)
    {
      if(this.usuarios[i].estado=='con alquiler')
      {
        this.activos++;
      }
    }


  }
  getAlquiladas()
  {
    this.alquiladas=0;
    for(var i =0; i<this.peliculas.length;i++)
    {
      if(this.peliculas[i].alquilada != null)
      {
        this.alquiladas++;
      }
    }

  }
  getNuevas()
  {
    this.nuevas=0;
    for(var i =0; i<this.peliculas.length;i++)
    {
      if(this.peliculas[i].cantidadAlquileres==0)
      {
        this.nuevas++;
      }
    }

  }

}
