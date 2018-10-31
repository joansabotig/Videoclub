export class Usuario {
    id:number;
    nombre:string;
    apellido:string;
    usuario:string;
    contraseña:string;
    telefono:string;
    correo:string;
    estado:string;
    constructor(nombre:string, apellido:string, usuario:string, contraseña:string, telefono:string, correo:string )
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario=usuario;
        this.contraseña = contraseña;
        this.telefono = telefono;
        this.correo = correo;
        this.estado = "sin alquiler";
    }
}
