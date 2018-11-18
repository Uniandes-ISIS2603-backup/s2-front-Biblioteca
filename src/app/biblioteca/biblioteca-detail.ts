import { Biblioteca } from './biblioteca';
import {Video} from '../video/video';
import {Libro} from '../libro/libro';
import {Sala} from '../sala/sala';
import {Usuario} from '../usuario/usuario';
/**
* This class represents an biblioteca of the Biblioteca.
* It contains all the information relevant to the biblioteca.
*/
export class BibliotecaDetail extends Biblioteca {

    videos: Video[];
    libros: Libro[];
    salas: Sala[];
    usuarios: Usuario[];

}
