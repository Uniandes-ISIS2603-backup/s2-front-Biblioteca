import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {VideoDigitalListComponent} from './video-digital-list/video-digital-list.component';
import { FormsModule } from '@angular/forms';
import {VideoDigitalService} from './video-digital.service';
import { VideoDigitalCreateComponent } from './video-digital-create/video-digital-create.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [VideoDigitalListComponent, VideoDigitalCreateComponent],
  providers:[VideoDigitalService],
  exports: [VideoDigitalListComponent]
})
export class VideoDigitalModule { }
