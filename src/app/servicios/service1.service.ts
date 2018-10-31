import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../clases/historial';
import { Service2Service } from './service2.service';
//este servicio va a controlar las peliculas
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  peliculas:Pelicula[] =[];
  historial:Historial[]=[];
 

  host: string ='http://localhost:3000/'
  constructor(private http: HttpClient, private service2:Service2Service) { 
  }
  obtenerPeliculas()
  {
    return this.http.get<Pelicula[]>(this.host + 'pelicula');
  }
  borrarPelicula(id:number)
  {
    return this.http.delete(this.host + 'pelicula/'+id);
  }
  obtenerPelicula(id: number)
  {
    return this.http.get<Pelicula>(this.host + 'pelicula/'+id);
  }
  modificar(peli:Pelicula,titulo:string, descripcion:string, imagen:string, genero:string)
  {
    peli.titulo = titulo;
    peli.descripcion = descripcion;
    peli.imagen = imagen;
    peli.genero = genero;
    return this.http.patch(this.host + 'pelicula/'+peli.id,peli);
  }
  nuevaPelicula(titulo:string, descripcion:string, imagen:string, genero:string)
  {
    console.log('service1')
    console.log(imagen);
    var nueva:Pelicula= new Pelicula(titulo,descripcion,imagen,genero);
    return this.http.post(this.host + 'pelicula', nueva);
  }
  eliminar(id:number)
  {
    return this.http.delete(this.host + 'pelicula/'+id);
  }
  alquilar(peli:Pelicula, id:number)
  {
    peli.alquilada = id;
    return this.http.patch(this.host + 'pelicula/'+peli.id,peli);
  }
  addhistorial(id_peli:number, id_user:number)
  {
    var his:Historial=new Historial(id_user,id_peli);
    return this.http.post(this.host+'historial',his);
  }
  getHistorial()
  {
    return this.http.get<Historial[]>(this.host+'historial');
  }
  devolver(peli:Pelicula, puntuacion:number)
  {
    peli.alquilada = null;
    peli.valoracion += puntuacion;
    peli.cantidadAlquileres++;
    return this.http.patch(this.host + 'pelicula/'+peli.id,peli);
  }
}
