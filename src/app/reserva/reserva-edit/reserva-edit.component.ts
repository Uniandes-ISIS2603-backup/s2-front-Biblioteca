import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ReservaService} from '../reserva.service';
import {ReservaDetail} from '../reserva-detail';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.css'],
  providers: [DatePipe]
})
export class ReservaEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param reservaService The reserva' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor
  (
        private dp: DatePipe,
        private reservaService: ReservaService,
        private toastrService: ToastrService,
  ) { }
    
   /**
    * 
    * El id de la reserva que se recibió del componente padre
    */
    @Input() reserva: ReservaDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar una reserva.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar una reserva.
    */
    @Output() update = new EventEmitter();
    
    
     /**
    * Actualización de la información de la reserva
    */
    editReserva(): void {
        let dateB: Date = new Date (this.reserva.fechaReserva.year,this.reserva.fechaReserva.month -1, this.reserva.fechaReserva.day)
        this.reserva.fechaReserva = this.dp.transform(dateB, 'yyyy-MM-dd');
         this.reservaService.updateReserva(this.reserva)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información de la reserva fue actualizada", "Reserva edition");
            });
        
    }
    
     /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }
    
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if (this.reserva && this.reserva.fechaReserva) {
            this.reserva.fechaReserva = this.reserva.fechaReserva.substring(0, 10);
            var date = {
                day: + this.reserva.fechaReserva.split('-')[2],
                month: + this.reserva.fechaReserva.split('-')[1],
                year: + this.reserva.fechaReserva.split('-')[0]
            };
            this.reserva.fechaReserva = date;
        }
    }
    
    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }
 

}
