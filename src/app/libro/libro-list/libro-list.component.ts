import { Component, OnInit } from '@angular/core';
import {Libro} from '../libro';
import {LibroService} from '../libro.service';
@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  constructor(private libroService:LibroService) { }
  
  libros:Libro[];
  getLibros():void{
      this.libroService.getLibros().subscribe(libros => this.libros=libros);
  }
  ngOnInit() {
      this.getLibros();
  }

}
