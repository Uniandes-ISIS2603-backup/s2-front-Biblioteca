import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  constructor(
    private videoService: VideoService
  ) {}

  video_id: number;

  ngOnInit() {
    //this.video_id = +this.route.snapshot.paramMap.get('id');
  }

}
