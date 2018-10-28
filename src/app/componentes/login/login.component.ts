import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../../servicios/service2.service';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { UserServiceService } from '../../servicios/user-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:string='';
  pass:string='';
  loggeado:boolean = false;
  usuario_actual:Usuario=null;
  

  constructor(private service2: Service2Service,private router: Router,private userService:UserServiceService) { }
  entrar()
  {
    
    var users:Usuario[];
    this.service2.obtenerUsuarios().subscribe(
      data=>{
        console.log(this.user+' '+ this.pass)
      users = data;
      for(var i =0; i<users.length; i++)
      {
        if(users[i].usuario == this.user && users[i].contraseña==this.pass && users[i].estado == 'offline')
        {
          this.loggeado = true;
          this.usuario_actual = users[i];
          this.service2.usuario_actual = users[i];
          this.service2.conectar(users[i]).subscribe(
            data=>{
             
                  this.userService.setUserLoggedIn(this.usuario_actual);
                  this.router.navigate(['']); 
                 console.log('loggeado')
                 
            },
            err=>console.log(err)
          );
        }
      }
    },
    err=> console.log(err)
    );
      
  }
 

}
