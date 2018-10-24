import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Sala} from './sala';
import {Observable} from 'rxjs'; 
const API_URL = '../../assets/';
const sala = '';
@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private  http: HttpClient) { }
  getSalas(): Observable<Sala[]>
  {
      return this.http.get<Sala[]>(API_URL + sala);
  }
}
