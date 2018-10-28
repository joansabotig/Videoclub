import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../../servicios/service2.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'mod-usuario',
  templateUrl: './mod-usuario.component.html',
  styleUrls: ['./mod-usuario.component.css']
})
export class ModUsuarioComponent  {

  actual:Usuario;
  bandera:boolean= false;
  nombre:string;
  apellido:string;
  usuario:string;
  contrasenia:string;
  correo:string;
  telefono:string;
  constructor(private servicio2:Service2Service,private router: Router,private route: ActivatedRoute) {
    if(servicio2.usuario_actual.id!=1 && servicio2.usuario_actual.id!=route.params['value']['id'] )
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    servicio2.obtenerUsuario(route.params['value']['id']).subscribe(
      data=>{
        this.actual = data;
        this.bandera=true;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.usuario = data.usuario;
        this.contrasenia = data.contraseña;
        this.correo = data.correo;
        this.telefono = data.telefono;
      },
      err=>console.log(err)
    );
  }

  modificar()
  {
    this.servicio2.modificar(this.actual,this.nombre,this.apellido,this.usuario,this.contrasenia, this.correo,this.telefono).subscribe(
      data=>
      {
        this.actual = null;
        this.router.navigate(['']);
      },
      err=>console.log(err)
    );
  }
  

}
