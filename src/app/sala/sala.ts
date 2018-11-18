import {Biblioteca} from '../biblioteca/biblioteca';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 export class Sala
 {
     /**
     * Identificador de la sala
     */
     id: number;
     /**
     * Disponibilidad de la sala
     */
     disponibilidad: boolean;
     /**
     * Ubicación de la sala
     */
     ubicacion: string;
     /**
     * Capacidad de la sala
     */
     capacidad: number;

     biblioteca: Biblioteca;
 }
