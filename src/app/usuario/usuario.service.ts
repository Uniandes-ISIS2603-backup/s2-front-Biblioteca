import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {Observable} from 'rxjs';

import {Usuario} from './usuario';
import{UsuarioDetail} from './usuario-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const usuarios = "usuarios";

@Injectable()
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
    
    /**
    * Actualizar un usuario
    * @param usuario El usuario que será actualizado
    * @returns La confirmación que la biblioteca fue actualizada
    */
    updateUsuario(usuario): Observable<UsuarioDetail> {
        return this.http.put<UsuarioDetail>(API_URL + usuarios + '/' + usuario.id, usuario);
    }
     /**
    * Deletes an usuario
    * @param usuarioId The id of the usuario
    * @returns The confirmation that the usuario was deleted
    */
    deleteUsuario(usuarioId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + usuarios + '/' + usuarioId);
    }
}
