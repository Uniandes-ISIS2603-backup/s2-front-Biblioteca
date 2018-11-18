import {Usuario} from './usuario';
import {Comentario} from '../comentario/comentario';
import {Prestamo} from '../prestamo/prestamo';
import {Reserva} from '../reserva/reserva';
/**
* This class represents an usuario of the Usuario.
* It contains all the information relevant to the usuario.
*/
export class UsuarioDetail extends Usuario{

  comentarios: Comentario[];
  prestamos: Prestamo[];
  reservas: Reserva[];

}
