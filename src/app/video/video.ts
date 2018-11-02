import { Biblioteca } from '../biblioteca/biblioteca';

export class Video {

  id: number;
  nombre: string;
  director: string;
  unidadesDisponibles: number;
  idioma: string;
  subtitulos: boolean;

  biblioteca: Biblioteca;

}
