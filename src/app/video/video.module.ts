import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoCreateComponent } from './video-create/video-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoListComponent, VideoDetailComponent, VideoCreateComponent],
  exports:[VideoListComponent]
})
export class VideoModule { }
