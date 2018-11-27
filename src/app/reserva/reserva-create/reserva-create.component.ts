import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css']
})
export class ReservaCreateComponent implements OnInit {

  constructor(private reservaService: ReservaService, private toastrService: ToastrService) { }

  reserva: Reserva;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createReserva(): Reserva {
    console.log(this.reserva);
    this.reservaService.createReserva(this.reserva).subscribe((reserva) => {
      this.reserva = reserva;
      this.create.emit();
      this.toastrService.success("La reserva fue creada", "Creación de Reserva");
    });
    return this.reserva;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.reserva = new Reserva();
  }

}
