import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';
import { environment } from '../../environments/environment';
import{UsuarioDetail} from './usuario-detail';
const API_URL = environment.apiURL;
const usuarios = "usuarios";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    constructor(private  http: HttpClient) { }
  getUsuarios(): Observable<Usuario[]>
  {
      return this.http.get<Usuario[]>(API_URL + usuarios);
  }
  getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuarioId);
    }
      /**
    * Crear un usuario
    * @param usuario el nuevo usuario
    * @returns La confirmacion que el usuario fue creado. 
    */
    createUsuario(usuario): Observable<Usuario> {
        return this.http.post<Usuario>(API_URL + usuarios, usuario);
    }
}
