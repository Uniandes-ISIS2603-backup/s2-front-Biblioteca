import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prestamo } from './prestamo';
import {PrestamoDetail} from './prestamo-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const prestamos = "prestamos";

/**
* The service provider for everything related to prestamos
*/
@Injectable()
export class PrestamoService 
{
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getPrestamos() : Observable<Prestamo[]> {
        return this.http.get<Prestamo []>(API_URL + prestamos);
    }
    
     getPrestamoDetail(prestamoId): Observable<PrestamoDetail> {
        return this.http.get<PrestamoDetail>(API_URL + prestamos + '/' + prestamoId);
    }
    
    /**
    * Crear de un prestamo
    * @param biblioteca la nueva biblioteca
    * @returns La confirmacion que la biblioteca fue creada. 
    */
    createPrestamo(prestamo): Observable<Prestamo> {
        return this.http.post<Prestamo>(API_URL + prestamos, prestamo);
    }
    
    /**
    * Entregar un prestamo
    * @param prestamo El prestamo que será entregado
    * @returns La confirmación que el prestamo fue entregado
    */
    updatePrestamo(prestamo): Observable<PrestamoDetail> {
        return this.http.put<PrestamoDetail>(API_URL + prestamos + '/' + prestamo.id, prestamos);
    }
}

