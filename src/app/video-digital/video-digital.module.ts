import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoDigitalListComponent} from './video-digital-list/video-digital-list.component';
import { FormsModule } from '@angular/forms';
import {VideoDigitalService} from './video-digital.service';
import { VideoDigitalCreateComponent } from './video-digital-create/video-digital-create.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VideoDigitalListComponent, VideoDigitalCreateComponent],
  providers:[VideoDigitalService],
  exports: [VideoDigitalListComponent]
})
export class VideoDigitalModule { }



