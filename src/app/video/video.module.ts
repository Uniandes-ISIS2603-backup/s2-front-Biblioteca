import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { VideoService } from './video.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoCreateComponent } from './video-create/video-create.component';
import { VideoEditComponent } from './video-edit/video-edit.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxPermissionsModule,
    AppRoutingModule
  ],
  declarations: [VideoListComponent, VideoDetailComponent, VideoCreateComponent, VideoEditComponent],
  providers:[VideoService],
  exports:[VideoListComponent]
})
export class VideoModule { }
