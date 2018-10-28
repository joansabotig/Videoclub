import { Pelicula } from "src/app/clases/pelicula";
import { Usuario } from "./usuario";

export class Historial {
    id:number;
    user_id:number;
    pelicula_id:number;
    constructor(user_id:number, pelicula_id)
    {
        this.user_id = user_id;
        this.pelicula_id = pelicula_id;
    }
    
}


