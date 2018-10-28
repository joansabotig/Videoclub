import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service2Service } from '../../servicios/service2.service';
import { UserServiceService } from '../../servicios/user-service.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service2: Service2Service, private router: Router,private userService:UserServiceService) 
  {
    if(service2.usuario_actual == null)
    {
      this.router.navigate(['login']);
    } 
    
   }

  ngOnInit() {
  }
  click_inicio()
  {
    this.router.navigate(['']);
  }
  cerrar_sesion()
  {
    this.userService.unsetUserLogged();

    this.service2.desconectar().subscribe(
      data=>{
        this.userService.unsetUserLogged();

        this.router.navigate(['login']);
        location.reload();
    },
    err=>console.log(err)
    );

  }
  loggearse()
  {
    this.router.navigate(['login']);
  }
  opc_admin()
  {
    this.router.navigate(['admin']);
  }

}
