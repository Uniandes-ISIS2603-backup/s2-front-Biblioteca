import {Libro} from '../libro/libro';
import {Usuario} from '../usuario/usuario';

export class Comentario {

    id:number;
    texto:string;
    fecha:Date;
    nombreUsuario:string;
    numeroEstrellas:number;

    libro: Libro;
    usuario: Usuario;

}
