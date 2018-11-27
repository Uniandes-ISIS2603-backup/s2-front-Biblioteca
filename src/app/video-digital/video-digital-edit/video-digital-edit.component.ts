import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {VideoDigitalService} from '../video-digital.service';
import {VideoDigitalDetail} from '../video-digital-detail';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-video-digital-edit',
  templateUrl: './video-digital-edit.component.html',
  styleUrls: ['./video-digital-edit.component.css']
})
export class VideoDigitalEditComponent implements OnInit {

    /**
    * Constructor for the component
    * @param videoDigitalService The videoDigital's services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor
  (
        private videoDigitalService: VideoDigitalService,
        
        private toastrService: ToastrService,
  ) { }
  
   /**
    * 
    * El id del videoDigital que se recibió del componente padre
    */
    @Input() videoDigital: VideoDigitalDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar un videoDigital.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar un videoDigital.
    */
    @Output() update = new EventEmitter();
    
     /**
    * Actualización de la información del videoDigital.
    */
    editvideoDigital(): void {
        this.videoDigitalService.updateVideoDigital(this.videoDigital)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información del videoDigital fue actualizada", "videoDigital edition");
            });
        
    }
/**
    * Emite la señal para decirle al componente principal que el 
    * usuario ya no quiere editar una biblioteca
    */
    cancelEdition(): void {
        this.cancel.emit();
    }
  /**
    * This function will initialize the component
    */
  ngOnInit() 
      {
       
      
        }
   /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
