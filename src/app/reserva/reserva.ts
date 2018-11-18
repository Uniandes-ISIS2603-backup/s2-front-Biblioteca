import {Usuario} from '../usuario/usuario';
import {Libro} from '../libro/libro';
import {Video} from '../video/video';
import {VideoDigital} from '../video-digital/video-digital';
import {Sala} from '../sala/sala';

export class Reserva {

  fechaReserva: Date;
  idRecursoReservado: number;
  tipoRecurso: string;
  estado: boolean;

  usuario: Usuario;
  libro: Libro;
  video: Video;
  videoDigital: VideoDigital;
  sala: Sala;

}
