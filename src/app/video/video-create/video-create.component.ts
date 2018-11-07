import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private toastrService: ToastrService
  ) { }

  video: Video;

  createVideo(): Video {
    this.videoService.createVideo(this.video)
      .subscribe((video) => {
        this.video = video;
        this.toastrService.success("El video fue creado", "Creacion del video");
      }, err => {
        this.toastrService.error(err, "Error")
      });
    return this.video;
  }

  ngOnInit() {
    this.video = new Video();
  }

}
