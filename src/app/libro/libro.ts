import {Biblioteca} from '../biblioteca/biblioteca';


export class Libro {
    /**
     * id del libro
     */
    id: number;
    /**
     * nombre del libro
     */
    nombre: string;
    /**
     * isbn del libro
     */
    isbn: string;
    /**
     * autor del libro
     */
    autor: string;
    /**
     * editorial del libro
     */
    editorial: string;
    /**
     * edicion del libro
     */
    edicion: string;
    /**
     * idioma del libro
     */
    idioma: string;
    /**
     * unidades disponibles del libro 
     */
    unidadesDisponibles: number;
    /**
     * numero de usuarios en lista de espera
     */
    usuariosListaEspera: number;
    /**
     * calificacion promedio
     */
    calificacionPromedio: number;

    /**
     * bibloteca
     */
    biblioteca: Biblioteca;
}