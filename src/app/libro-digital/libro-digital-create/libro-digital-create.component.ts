import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { LibroDigital } from '../libro-digital';
import { LibroDigitalService } from '../libro-digital.service';

@Component({
  selector: 'app-libro-digital-create',
  templateUrl: './libro-digital-create.component.html',
  styleUrls: ['./libro-digital-create.component.css']
})
export class LibroDigitalCreateComponent implements OnInit {

  constructor(private libroDigitalService: LibroDigitalService, private toastrService: ToastrService) { }

  libroDigital: LibroDigital;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createLibroDigital(): LibroDigital {
    console.log(this.libroDigital);
    this.libroDigitalService.createLibroDigital(this.libroDigital).subscribe((libroDigital) => {
      this.libroDigital = libroDigital;
      this.create.emit();
      this.toastrService.success("El Libro Digital fue creado", "Creación de LibroDigital");
    });
    return this.libroDigital;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.libroDigital = new LibroDigital();
  }

}
