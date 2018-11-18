import { Video } from './video';
import { Prestamo } from '../prestamo/prestamo';
import {Reserva} from '../reserva/reserva';

export class VideoDetail extends Video {

  reservas: Reserva[];
  prestamos: Prestamo[];

}
