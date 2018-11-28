import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Reserva} from './reserva';
import { ReservaDetail } from './reserva-detail';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const reservas = 'reservas';

@Injectable()
export class ReservaService {

    constructor(private http: HttpClient){}

    getReservas(): Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL + reservas);
    }
    
    getReservaDetail(reservaId): Observable<ReservaDetail> {
        return this.http.get<ReservaDetail>(API_URL + reservas + '/' + reservaId);
    }
    
    createReserva(reserva): Observable<Reserva> {
        return this.http.post<Reserva>(API_URL + reservas, reserva);
    }
    
    /**
    * Actualizar una biblioteca
    * @param biblioteca La biblioteca que será actualizada
    * @returns La confirmación que la biblioteca fue actualizada
    */
    updateReserva(reserva): Observable<ReservaDetail> {
        return this.http.put<ReservaDetail>(API_URL + reservas + '/' + reserva.id, reserva);
    }
}