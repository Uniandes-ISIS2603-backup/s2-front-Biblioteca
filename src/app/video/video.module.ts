import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './video.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoCreateComponent } from './video-create/video-create.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [VideoListComponent, VideoDetailComponent, VideoCreateComponent],
  providers:[VideoService],
  exports:[VideoListComponent]
})
export class VideoModule { }
