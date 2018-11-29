import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DatePipe} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService} from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [DatePipe]
})
export class ReservaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private reservaService: ReservaService,
    private toastrService: ToastrService,
    private usuarioService: UsuarioService,
  ) { }

  reserva: Reserva;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createReserva(): Reserva {
      let dateB: Date = new Date(this.reserva.fechaReserva.year, this.reserva.fechaReserva.month - 1, this.reserva.fechaReserva.day);
      this.reserva.fechaReserva = this.dp.transform(dateB, 'yyyy-MM-dd' );
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
     this.reserva.usuario = new Usuario();
  }

}
