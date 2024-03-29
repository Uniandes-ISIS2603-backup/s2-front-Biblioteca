import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Sala} from './sala';
import{SalaDetail} from './sala-detail';
import {Observable} from 'rxjs'; 
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const salas = 'salas';
@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private  http: HttpClient) { }
  getSalas(): Observable<Sala[]>
  {
      return this.http.get<Sala[]>(API_URL + salas);
  }
  getSalaDetail(salaId): Observable<SalaDetail> {
        return this.http.get<SalaDetail>(API_URL + salas + '/' + salaId);
    }
      /**
    * Crear una sala
    * @param sala la nueva sala
    * @returns La confirmacion que la sala fue creada. 
    */
    createSala(sala): Observable<Sala> {
        return this.http.post<Sala>(API_URL + salas, sala);
    }
         /**
    * Actualizar una sala
    * @param sala La sala  que será actualizada.
    * @returns La confirmación que la sala fue actualizada.
    */
    updateSala(sala): Observable<SalaDetail> {
        return this.http.put<SalaDetail>(API_URL + salas + '/' + sala.id, sala);
    }
         /**
    * Deletes a sala
    * @param salaId The id of the sala
    * @returns The confirmation that the sala was deleted
    */
    deleteSala(salaId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + salas + '/' + salaId);
    }
}
