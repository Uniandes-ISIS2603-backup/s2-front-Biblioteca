
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VideoDigital} from './video-digital';
import { Observable } from 'rxjs';
import {VideoDigitalDetail} from './video-digital-detail';

const API_URL = "http://localhost:8080/sX_biblioteca-api/";
const videosDigitales = "bibliotecas.json";

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class VideoDigitalService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getVideosDigitales() : Observable<VideoDigital[]> {
        return this.http.get<VideoDigital[]>(API_URL + videosDigitales);
    }
     getVideoDigitalDetail(videoDigitalId): Observable<VideoDigitalDetail> {
        return this.http.get<VideoDigitalDetail>(API_URL + videosDigitales + '/' + videoDigitalId);
    }
}