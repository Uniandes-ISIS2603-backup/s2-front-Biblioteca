import {Usuario} from '../usuario/usuario';
import {Libro} from '../libro/libro';
import {Video} from '../video/video';
import {Sala} from '../sala/sala';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class  Prestamo {
    /**
     * Se refiera a la fecha en la que se presta el libro
     */
    fechaDeSalida: Date;

    /**
     * Se refiera a la fecha en la que se debe entregar el libro
     */
    fechaDeEntrega: Date;

    /**
     * Se refiere a si el libro fue devuelto o no
     */
    retornado: boolean;

    /**
    * Se refiere al identificador de cada prestamo
    */
    id: number;

    usuario: Usuario;
    libro: Libro;
    video: Video;
    sala: Sala;
}
