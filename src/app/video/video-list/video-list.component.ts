import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from '../../video/video';
import { VideoService } from '../../video/video.service';
import { VideoDetail } from '../video-detail';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers:[ VideoService ]
})
export class VideoListComponent implements OnInit {

  videos: Video[];
  showCreate: boolean;
  selectedVideo: Video;
  video_id: number;

  constructor(private videoService: VideoService) { }

  onSelected(video_id: number): void {
    this.showCreate = false;
    this.video_id = video_id;
    this.selectedVideo = new VideoDetail();
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe(videos => {this.videos = videos});
  }

  showHideCreate(): void {
    if(this.selectedVideo) {
      this.selectedVideo = undefined;
      this.video_id = undefined;
    }
    this.showCreate = !this.showCreate;
  }

  ngOnInit() {
    this.getVideos();
    this.showCreate = false;
  }

}
