import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  constructor(
    //private videoService: VideoService,
    //private route: ActivatedRoute
  ) {}

  video_id: number;

  ngOnInit() {
    //this.video_id = +this.route.snapshot.paramMap.get('id');
  }

}
