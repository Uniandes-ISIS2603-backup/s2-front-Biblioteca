
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Biblioteca} from './biblioteca';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const bibliotecas = 'bibliotecas.json';

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
    
}


