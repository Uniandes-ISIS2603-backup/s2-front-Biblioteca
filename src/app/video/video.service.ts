import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Video} from './video';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const videos = '/videos';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL + videos);
  }

}
