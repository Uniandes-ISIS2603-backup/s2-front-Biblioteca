import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoListComponent, VideoDetailComponent],
  exports:[VideoListComponent]
})
export class VideoModule { }
