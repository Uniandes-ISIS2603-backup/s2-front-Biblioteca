import { Component, OnInit } from '@angular/core';

import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }

  reservas: Reserva[];
  showCreate: boolean;
  selectedReserva: Reserva;
  reserva_id: number;

  onSelected(reserva_id: number): void {
    this.showCreate = false;
    this.selectedReserva = new Reserva();
  }

  getReservas(): void {
    this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  ngOnInit() {
    this.getReservas();
    this.showCreate = false;
  }

}
