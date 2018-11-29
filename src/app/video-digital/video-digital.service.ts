
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {VideoDigital} from './video-digital';
import {VideoDigitalDetail} from './video-digital-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const videosdigitales = "videosdigitales";

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
        return this.http.get<VideoDigital[]>(API_URL + videosdigitales);
    }
     getVideoDigitalDetail(videoDigitalId): Observable<VideoDigitalDetail> {
        return this.http.get<VideoDigitalDetail>(API_URL + videosdigitales + '/' + videoDigitalId);
    }
     /**
    * Creates an videoDigital
    * @param videoDigital The new videoDigital
    * @returns The new videoDigital with the new id
    */
    createVideoDigital(videoDigital): Observable<VideoDigital> {
        return this.http.post<VideoDigital>(API_URL + videosdigitales, videoDigital);
    }
    
    /**
    * Actualizar un videoDigital
    * @param videoDigital El videoDigital que será actualizada
    * @returns La confirmación que el videoDigital fue actualizada
    */
    updateVideoDigital(videoDigital): Observable<VideoDigitalDetail> {
        return this.http.put<VideoDigitalDetail>(API_URL + videosdigitales + '/' + videoDigital.id, videoDigital);
    }
         /**
    * Deletes a video digital
    * @param videoDigitalId The id of the videoDigital
    * @returns The confirmation that the videoDigital was deleted
    */
    deleteVideoDigital(videoDigitalId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + videosdigitales + '/' + videoDigitalId);
    }
}