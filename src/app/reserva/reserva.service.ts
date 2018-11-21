import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Reserva} from './reserva';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const reservas = 'reservas';

@Injectable()
export class ReservaService {

    constructor(private http: HttpClient){}

    getReservas(): Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL + reservas);
    }

    createReserva(reserva): Observable<Reserva> {
        return this.http.post<Reserva>(API_URL + reservas, reserva);
    }

}