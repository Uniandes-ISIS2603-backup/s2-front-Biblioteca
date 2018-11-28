import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { VideoService } from '../video.service';
import { VideoDetail } from '../video-detail';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit, OnChanges {

  constructor(private videoService: VideoService, private toastrService: ToastrService) { }

  @Input() video: VideoDetail;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  editVideo(): void {
    this.videoService.updateVideo(this.video).subscribe(() => {
      this.update.emit();
      this.toastrService.success("La información del video fue actualizada", "Video edition");
    });
  }

  cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
  }

  ngOnChanges() {
      this.ngOnInit();
  }

}
