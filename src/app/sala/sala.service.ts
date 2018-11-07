import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Sala} from './sala';
import{SalaDetail} from './sala-detail';
import {Observable} from 'rxjs'; 
const API_URL = '../../assets/';
const sala = 'salas.json';
@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private  http: HttpClient) { }
  getSalas(): Observable<Sala[]>
  {
      return this.http.get<Sala[]>(API_URL + sala);
  }
  getSalaDetail(salaId): Observable<SalaDetail> {
        return this.http.get<SalaDetail>(API_URL + sala + '/' + salaId);
    }
}
