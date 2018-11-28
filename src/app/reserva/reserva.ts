import {Usuario} from '../usuario/usuario';
import {Libro} from '../libro/libro';
import {Video} from '../video/video';
import {VideoDigital} from '../video-digital/video-digital';
import {Sala} from '../sala/sala';

export class Reserva {

   /**
    * Se refiere al identificador de cada biblioteca
    */
    id: number;
  fechaReserva: any;
  idRecursoReservado: number;
  tipoRecurso: string;
  estado: boolean;



}
