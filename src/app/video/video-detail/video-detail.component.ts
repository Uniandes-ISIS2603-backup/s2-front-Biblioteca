import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import {Video} from '../video';
import {VideoService} from '../video.service';
import {VideoDetail} from '../video-detail';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
          this.ngOnInit();
      }
    });
  }

  video_id: number;
  videoDetail: VideoDetail;
  navigationSubscription;

  getVideoDetail(): void {
    this.videoService.getVideoDetail(this.video_id).subscribe(
      videoDetail => {this.videoDetail = videoDetail}
    );
  }

  ngOnInit() {
    this.video_id = +this.route.snapshot.paramMap.get('id');
    if(this.video_id){
      this.videoDetail = new VideoDetail();
      this.getVideoDetail();
    }
  }

}
