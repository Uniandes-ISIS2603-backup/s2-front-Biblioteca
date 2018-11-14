
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VideoDigital} from './video-digital';
import { Observable } from 'rxjs';
import {VideoDigitalDetail} from './video-digital-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const videosDigitales = "videosdigitales";

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
     /**
    * Creates an videoDigital
    * @param videoDigital The new videoDigital
    * @returns The new videoDigital with the new id
    */
    createVideoDigital(videoDigital): Observable<VideoDigital> {
        return this.http.post<VideoDigital>(API_URL + videosDigitales, videoDigital);
    }
}