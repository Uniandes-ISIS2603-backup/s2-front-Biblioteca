
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Biblioteca} from './biblioteca';
import { BibliotecaDetail } from './biblioteca-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const bibliotecas = "bibliotecas";

/**
* The service provider for everything related to biblioteca
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
    
    /**
    * Crear de una bibilioteca
    * @param biblioteca la nueva biblioteca
    * @returns La confirmacion que la biblioteca fue creada. 
    */
    createBiblioteca(biblioteca): Observable<Biblioteca> {
        return this.http.post<Biblioteca>(API_URL + bibliotecas, biblioteca);
    }
    
    /**
    * Actualizar una biblioteca
    * @param biblioteca La biblioteca que será actualizada
    * @returns La confirmación que la biblioteca fue actualizada
    */
    updateBiblioteca(biblioteca): Observable<BibliotecaDetail> {
        return this.http.put<BibliotecaDetail>(API_URL + bibliotecas + '/' + biblioteca.id, biblioteca);
    }
}


