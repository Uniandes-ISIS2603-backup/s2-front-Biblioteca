
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comentario} from './comentario';
import { Observable } from 'rxjs';
import {ComentarioDetail} from './comentario-detail'
import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const comentarios = '/comentarios';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class ComentarioService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getComentarios() : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + comentarios);
    }
    
    getComentarioDetail(comentarioId): Observable<ComentarioDetail>{
        return this.http.get<ComentarioDetail>(API_URL + comentarios + '/' + comentarioId)
    }

}
