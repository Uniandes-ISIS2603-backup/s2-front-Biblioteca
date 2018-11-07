import { Component, OnInit } from '@angular/core';
import {VideoDigital} from '../video-digital';
import {VideoDigitalService} from '../video-digital.service';
import {VideoDigitalDetail} from '../video-digital-detail';

@Component({
  selector: 'app-videoDigital',
  templateUrl: './video-digital-list.component.html',
  styleUrls: ['./video-digital-list.component.css']
})
export class VideoDigitalListComponent implements OnInit {

  constructor(private videoDigitalService: VideoDigitalService) { }

    /**
     * La lista de videosDigitales del sistema de videosDigitales
     */
    videosDigitales: VideoDigital[];
      /**
    * Muestra o oculta el video-digital-create-component
    */
    showCreate: boolean;
    
    selectedVideoDigital : VideoDigital;
    
    videoDigital_id: number;
    
     /**
    * Shows the videoDigital
    */
    onSelected(videoDigital_id: number):void {
        this.showCreate = false;
        this.videoDigital_id = videoDigital_id;
        this.selectedVideoDigital = new VideoDigitalDetail();
        
    }
    /**
     * Pregunta el servicio para actualizar la lista de videosDigitales
     */
    getVideosDigitales(): void {
        this.videoDigitalService.getVideosDigitales().subscribe(videosDigitales => this.videosDigitales = videosDigitales);
    }

  ngOnInit() 
      {
        this.getVideosDigitales();
        this.showCreate=false;
      }
showHideCreate(): void {
        if (this.selectedVideoDigital) {
            this.selectedVideoDigital = undefined;
            this.videoDigital_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
}
