import { Component, OnInit } from '@angular/core';

import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { ReservaDetail } from '../reserva-detail';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }

  reservas: Reserva[];
  showCreate: boolean;
   /**
    * Muestra o oculta la edición de una reserva
    */
    showEdit: boolean;
    
    /**
     * Muestra o oculta el detalle de una reserva
     */
    showView: boolean;
    
  selectedReserva: Reserva;
  reserva_id: number;

  onSelected(reserva_id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.showView = true;
    this.reserva_id = reserva_id;
    this.selectedReserva = new ReservaDetail();
    this.getReservaDetail();
  }
    
  getReservaDetail(): void {
        this.reservaService.getReservaDetail(this.reserva_id)
            .subscribe(selectedReserva => {
                this.selectedReserva = selectedReserva
            });
    }
    
  getReservas(): void {
    this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
  }

  showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
  }
  
  updateReserva(): void{
        this.showEdit = false;
        this.showView = true;
        this.getReservas();
    }

/**
    * Shows or hides the create component
    */
    showHideEdit(reserva_id: number): void {
        if (!this.showEdit || (this.showEdit && reserva_id != this.selectedReserva.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.reserva_id = reserva_id;
            this.selectedReserva = new ReservaDetail();
            this.getReservaDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
  ngOnInit() {
    
    this.showView = false;
    this.showEdit = false;
    this.selectedReserva = undefined;
    this.reserva_id = undefined;
    this.showCreate = false;
    this.getReservas();
  }

}
