import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {VideoDigitalListComponent} from './video-digital-list/video-digital-list.component';
import { FormsModule } from '@angular/forms';
import {VideoDigitalService} from './video-digital.service';
import { VideoDigitalCreateComponent } from './video-digital-create/video-digital-create.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {VideoDigitalDetailComponent} from './video-digital-detail/video-digital-detail.component';
@NgModule({
  imports: [
       BrowserModule,
    CommonModule,
    AppRoutingModule,
            HttpClientModule,

    FormsModule
  ],
  declarations: [VideoDigitalListComponent, VideoDigitalCreateComponent,VideoDigitalDetailComponent],
  providers:[VideoDigitalService],
  exports: [VideoDigitalListComponent]
})
export class VideoDigitalModule { }
