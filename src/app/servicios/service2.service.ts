import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../clases/historial';
import { UserServiceService } from './user-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  usuarios:Usuario[] = [];
  usuario_actual:Usuario=null;
  historiales:Historial[]=[];
  host: string ='http://localhost:3000/';
  admin:number =1;

  constructor(private http: HttpClient, private userService:UserServiceService) {
    this.usuario_actual = userService.getUserLoggedIn();
    console.log('constructor');
   }
  obtenerUsuarios()
  {
    return this.http.get<Usuario[]>(this.host + 'usuario');
  }
  alquilar(user_id:number)
  {
    var inquilino:Usuario;
    this.obtenerUsuario(user_id).subscribe(data=>{
      inquilino=data;
      inquilino.estado = 'con alquiler';
      this.userService.setUserLoggedIn(inquilino);
      this.http.patch(this.host + 'usuario/'+user_id,inquilino).subscribe();
    })
  }
  eliminar(id:number)
  {
    return this.http.delete(this.host + 'usuario/'+id);
  }
  devolver(user_id:number)
  {
    if(user_id == this.usuario_actual.id)
    {
      
      this.usuario_actual.estado  = 'sin alquiler';
      this.userService.setUserLoggedIn(this.usuario_actual);
    }
    var inquilino:Usuario;
    this.obtenerUsuario(user_id).subscribe(data=>{
      inquilino=data;
      inquilino.estado = 'sin alquiler';
      this.http.patch(this.host + 'usuario/'+user_id,inquilino).subscribe();
    })
  }

  borrarUsuario(id:number)
  {
    return this.http.delete(this.host + 'usuario/'+id);
  }
  obtenerUsuario(id: number)
  {
    return this.http.get<Usuario>(this.host + 'usuario/'+id);
  }
  nuevoUsuario(nombre:string, apellido:string, usuario:string, contraseña:string,telefono:string, correo:string)
  {
    var nuevo:Usuario= new Usuario(nombre,apellido,usuario,contraseña,telefono,correo);
    return this.http.post(this.host + 'usuario', nuevo);
  }
  modificar(user:Usuario, nombre:string, apellido:string, username:string, contraseña:string, correo:string, telefono:string)
  {
    user.nombre = nombre;
    user.apellido= apellido;
    user.usuario = username;
    user.contraseña = contraseña;
    user.correo = correo;
    user.telefono = telefono;
    return this.http.patch(this.host + 'usuario/'+user.id,user);
  }
  conectar(user:Usuario)
  {
    // user.estado = 'online';
    this.usuario_actual = user;
    return this.http.patch(this.host + 'usuario/'+user.id,user);
  }
  desconectar()
  {
    // this.usuario_actual.estado = 'offline';
    this.userService.unsetUserLogged();
    return this.http.patch(this.host + 'usuario/'+this.usuario_actual.id,this.usuario_actual);
  }
  loggear(user:string, pass:string)
  {
    var users:Usuario[];
    var bandera:boolean=false;

    this.obtenerUsuarios().subscribe(
      data=>{
      users = data;
      for(var i =0; i<users.length; i++)
      {
        if(users[i].usuario == user && users[i].contraseña==pass)
        {
          bandera = true;
          this.usuario_actual = users[i];
          this.conectar(users[i]).subscribe(
            data=>{},
            err=>console.log(err)
          );
        }
      }
    },
    err=> console.log(err)
    );
    return bandera;
  }
}
