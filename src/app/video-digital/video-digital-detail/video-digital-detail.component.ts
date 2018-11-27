import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {VideoDigital} from '../video-digital';
import {VideoDigitalService} from '../video-digital.service';
import { VideoDigitalDetail } from '../video-digital-detail';

@Component({
  selector: 'app-video-digital-detail',
  templateUrl: './video-digital-detail.component.html',
  styleUrls: ['./video-digital-detail.component.css']
})
export class VideoDigitalDetailComponent implements OnInit {

     /**
    * The author
    */
    @Input() videoDigitalDetail: VideoDigitalDetail;
  constructor(private videoDigitalService: VideoDigitalService, private route: ActivatedRoute) { }
  
  

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
           if (this.videoDigital_id)
            {
           this.videoDigitalDetail = new VideoDigitalDetail();
            this.getVideoDigitalDetail();
            }
       }

}



