import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Service2Service } from 'src/app/servicios/service2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{
  actual:Usuario;


  constructor(private service2: Service2Service,private router: Router) 
  {
    
    this.actual =service2.usuario_actual;
  }
  editar()
  {
    this.router.navigate(['editar_usuario/'+this.actual.id]);
  }
  ver_historial()
  {
    this.router.navigate(['historial/'+this.actual.id]);
  }

  

}
