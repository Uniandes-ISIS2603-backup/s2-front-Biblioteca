import {Biblioteca} from '../biblioteca/biblioteca';


export class Libro {
    id: number;
    nombre: string;
    isbn: string;
    autor: string;
    editorial: string;
    edicion: string;
    idioma: string;
    unidadesDisponibles: number;
    usuariosListaEspera: number;
    calificacionPromedio: number;

    biblioteca: Biblioteca;
}