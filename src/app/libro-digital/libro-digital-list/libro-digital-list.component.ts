import { Component, OnInit } from '@angular/core';

import { libroDigital } from '../../libro-digital/libro-digital';
import { LibroDigitalService } from '../../libro-digital/libro-digital.service';

@Component({
  selector: 'app-libro-digital-list',
  templateUrl: './libro-digital-list.component.html',
  styleUrls: ['./libro-digital-list.component.css']
})
export class LibroDigitalListComponent implements OnInit {

  librosDigitales: libroDigital[];

  constructor(private libroDigitalService: LibroDigitalService) { }

  getLibrosDigitales(): void {
    this.libroDigitalService.getLibrosDigitales().subscribe(librosDigitales => {this.librosDigitales = librosDigitales});
  }

  ngOnInit() {
    this.getLibrosDigitales();
  }

}
