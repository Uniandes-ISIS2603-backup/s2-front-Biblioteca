import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Video} from './video';
import {VideoDetail} from './video-detail';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const videos = '/videos';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL + videos);
  }

  getVideoDetail(videoId): Observable<VideoDetail> {
    return this.http.get<VideoDetail>(API_URL + videos + "/" + videoId);
  }

}
