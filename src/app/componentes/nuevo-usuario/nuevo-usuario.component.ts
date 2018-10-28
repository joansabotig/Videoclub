import { Component} from '@angular/core';
import { Service2Service } from '../../servicios/service2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  nombre:string;
  apellido:string;
  usuario:string;
  contrasenia:string;
  telefono:string;
  correo:string;

  constructor(private service2: Service2Service,private router: Router) 
  {
    if(service2.usuario_actual.id!=1)
    {
      this.router.navigate(['']);
      console.log('vos no sos admin, pero buen intento');
    }
  }

  nuevo()
  {
    this.service2.nuevoUsuario(this.nombre,this.apellido,this.usuario,this.contrasenia,this.telefono,this.correo).subscribe(data=>{
      this.router.navigate(['']);
    },
    err=>console.log(err)
    );
  }
  

}
