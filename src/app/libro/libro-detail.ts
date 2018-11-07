
import { Libro } from './libro';
import { Comentario } from '../comentario/comentario';

/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class LibroDetail extends Libro {
    
    comentarios: Comentario[];
}
