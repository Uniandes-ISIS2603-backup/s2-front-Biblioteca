import { Reserva } from './reserva';
import {Video} from '../video/video';
import {Libro} from '../libro/libro';
import {Sala} from '../sala/sala';
import {Usuario} from '../usuario/usuario';

export class ReservaDetail extends Reserva {

    usuario: Usuario;
    libro: Libro;
    video: Video;
    sala: Sala;

}
