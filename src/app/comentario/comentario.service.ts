
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comentario} from './comentario';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/sX_biblioteca-api/";
const comentarios = "/comentarios";

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
    
}
