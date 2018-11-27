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
    
    /**
    * Muestra o oculta la edición de un videoDigital
    */
    showEdit: boolean;
    
     /**
     * Muestra o oculta el detalle de un videoDigital
     */
    showView: boolean;
    
    selectedVideoDigital : VideoDigital;
    
    videoDigital_id: number;
    
     /**
    * Shows the videoDigital
    */
    onSelected(videoDigital_id: number):void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.videoDigital_id = videoDigital_id;
        this.selectedVideoDigital = new VideoDigitalDetail();
        this.getVideoDigitalDetail();
        
    }
    
    getVideoDigitalDetail(): void {
        this.videoDigitalService.getVideoDigitalDetail(this.videoDigital_id)
            .subscribe(selectedVideoDigital => {
                this.selectedVideoDigital = selectedVideoDigital
            });
    }
    /**
     * Pregunta el servicio para actualizar la lista de videosDigitales
     */
    getVideosDigitales(): void {
        this.videoDigitalService.getVideosDigitales().subscribe(videosDigitales => this.videosDigitales = videosDigitales);
    }

showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    updateVideoDigital(): void{
        this.showEdit = false;
        this.showView = true;
        this.getVideosDigitales();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideEdit(videoDigital_id: number): void {
        if (!this.showEdit || (this.showEdit && videoDigital_id != this.selectedVideoDigital.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.videoDigital_id = videoDigital_id;
            this.selectedVideoDigital = new VideoDigitalDetail();
            this.getVideoDigitalDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
    
    ngOnInit() 
      {
       
        this.showView = false;
        this.showEdit = false;
        this.selectedVideoDigital = undefined;
        this.videoDigital_id = undefined;
        this.showCreate = false;
        this.getVideosDigitales();
      }
}
