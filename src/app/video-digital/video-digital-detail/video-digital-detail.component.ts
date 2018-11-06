import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {VideoDigital} from '../video-digital';
import {VideoDigitalService} from '../video-digital.services';
import { VideoDigitalDetail } from '../video-digital-detail';

@Component({
  selector: 'app-video-digital-detail',
  templateUrl: './video-digital-detail.component.html',
  styleUrls: ['./video-digital-detail.component.css']
})
export class VideoDigitalDetailComponent implements OnInit {

  constructor(private videoDigitalService: VideoDigitalService, private route: ActivatedRoute) { }
  
  /**
    * El video digital que queremos mostrar
    */
    videoDigitalDetail: VideoDigitalDetail;

    /**
    * El id del video digital que queremos
    */
    videoDigital_id: number;
    
    getVideoDigitalDetail(): void {
        this.videoDigitalService.getVideoDigitalDetail(this.videoDigital_id)
            .subscribe(videoDigitalDetail => {
                this.videoDigitalDetail = videoDigitalDetail
            });
    }
  ngOnInit() 
      {
           this.videoDigital_id = +this.route.snapshot.paramMap.get('id');
           this.videoDigitalDetail = new VideoDigitalDetail();
            this.getVideoDigitalDetail();
       }

}



