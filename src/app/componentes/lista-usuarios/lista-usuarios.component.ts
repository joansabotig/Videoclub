import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Service2Service } from 'src/app/servicios/service2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {



  usuarios:Usuario[]=[];
  constructor(private servicio2:Service2Service,private router: Router, private service2:Service2Service) 
  {
    if(service2.usuario_actual.id!=service2.admin)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
    this.servicio2.obtenerUsuarios().subscribe(
      data=>{
        this.usuarios=data;
      },
      err=>console.log(err),
    );
  }
  seleccionar(seleccionada: Usuario)
  {
    this.router.navigate(['/editar_usuario/' + seleccionada.id]);
  }


}
