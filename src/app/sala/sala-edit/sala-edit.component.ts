import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {SalaService} from '../sala.service';
import {SalaDetail} from '../sala-detail';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-sala-edit',
  templateUrl: './sala-edit.component.html',
  styleUrls: ['./sala-edit.component.css']
})
export class SalaEditComponent implements OnInit, OnChanges {

 /**
    * Constructor for the component
    * @param salaService The salas' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor
  (
        private salaService: SalaService,
        
        private toastrService: ToastrService,
  ) { }

     /**
    * 
    * El id de la sala que se recibió del componente padre
    */
    @Input() sala: SalaDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar una sala.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar una sala
    */
    @Output() update = new EventEmitter();
    
     /**
    * Actualización de la información de una sala
    */
    editSala(): void {
        this.salaService.updateSala(this.sala)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información de la sala fue actualizada", "Sala edition");
            });
        
    }
    /**
    * Emite la señal para decirle al componente principal que el 
    * usuario ya no quiere editar una sala
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
    * This function will be called when the user chooses another sala to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
