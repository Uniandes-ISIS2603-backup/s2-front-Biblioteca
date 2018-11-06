import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';
const API_URL = '../../assets/';
const usuarios = 'usuarios.json';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  getUsuarios():Observable<Usuario[]>
  {
      return this.http.get<Usuario[]> (API_URL + usuarios);
      
      
  }
}
