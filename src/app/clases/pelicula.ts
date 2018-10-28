export class Pelicula {
    id:number;
    titulo:string;
    descripcion:string;
    imagen:string;
    genero:string;
    alquilada:number = null;
    valoracion:number;
    cantidadAlquileres:number;
    constructor(titulo:string, descripcion:string, imagen:string, genero:string)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.genero = genero;
        this.alquilada = null;
        this.cantidadAlquileres =0;
        this.valoracion = 0;
        this.imagen=imagen;
        
    }
    devolver(puntuacion:number)
    {
        this.alquilada=null;
        this.cantidadAlquileres++;
        this.valoracion =+ puntuacion;
    }
    
   
}
