import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {LibroDigital} from './libro-digital';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const librosD = '/librosDigitales';

@Injectable()
export class LibroDigitalService {

  constructor(private http: HttpClient) {}

  getLibrosDigitales(): Observable<LibroDigital[]> {
    return this.http.get<LibroDigital[]>(API_URL + librosD);
  }
}
