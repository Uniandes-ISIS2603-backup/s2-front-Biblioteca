import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VideoDigitalService } from '../video-digital.service';
import { VideoDigital } from '../video-digital';
@Component({
  selector: 'app-video-digital-create',
  templateUrl: './video-digital-create.component.html',
  styleUrls: ['./video-digital-create.component.css']
})
export class VideoDigitalCreateComponent implements OnInit {
 @Output() cancel = new EventEmitter();
 @Output() create = new EventEmitter();
  constructor(

  private videoDigitalService: VideoDigitalService,
  private toastrService: ToastrService
  ) { }
videoDigital: VideoDigital;
  ngOnInit() {
      this.videoDigital=new VideoDigital();
  }createVideoDigital(): VideoDigital {
       


        this.videoDigitalService.createVideoDigital(this.videoDigital)
            .subscribe((videoDigital) => {
                this.videoDigital = videoDigital;
                this.create.emit();
                this.toastrService.success("The videoDigital was created", "VideoDigital creation");                
            });
            return this.videoDigital;
    }
    cancelCreation(): void {
        this.cancel.emit();
}

}
