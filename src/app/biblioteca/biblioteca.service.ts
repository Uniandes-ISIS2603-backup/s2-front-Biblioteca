
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Biblioteca} from './biblioteca';
import { BibliotecaDetail } from './biblioteca-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const bibliotecas = "bibliotecas";

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class BibliotecaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getBibliotecas() : Observable<Biblioteca[]> {
        return this.http.get<Biblioteca[]>(API_URL + bibliotecas);
    }
    
     getBibliotecaDetail(bibliotecaId): Observable<BibliotecaDetail> {
        return this.http.get<BibliotecaDetail>(API_URL + bibliotecas + '/' + bibliotecaId);
    }
}


