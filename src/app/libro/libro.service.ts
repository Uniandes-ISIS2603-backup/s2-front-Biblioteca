
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Libro} from './libro';
import { Observable } from 'rxjs';
import { LibroDetail } from './libro-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const libros = '/libros';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class LibroService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getLibros() : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + libros);
    }
    
    getLibroDetail(libroId): Observable<LibroDetail> {
        return this.http.get<LibroDetail>(API_URL + libros + '/' + libroId);
    }
}
