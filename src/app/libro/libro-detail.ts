
import { Libro } from './libro';
import { Comentario } from '../comentario/comentario';
import {Prestamo} from '../prestamo/prestamo';
import {Reserva} from '../reserva/reserva';

/**
* This class represents a book of the BookStore.
* It contains all the information relevant to the book.
*/
export class LibroDetail extends Libro {

    comentarios: Comentario[];
    prestamos: Prestamo[];
    reservas: Reserva[];
}
