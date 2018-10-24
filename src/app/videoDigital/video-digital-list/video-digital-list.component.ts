import { Component, OnInit } from '@angular/core';
import {VideoDigital} from '../videoDigital';
import {VideoDigitalService} from '../videoDigital.services';

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
     * Pregunta el servicio para actualizar la lista de videosDigitales
     */
    getVideosDigitales(): void {
        this.videoDigitalService.getVideosDigitales().subscribe(videosDigitales => this.videosDigitales = videosDigitales);
    }

  ngOnInit() 
      {
        this.getVideosDigitales();
      }

}