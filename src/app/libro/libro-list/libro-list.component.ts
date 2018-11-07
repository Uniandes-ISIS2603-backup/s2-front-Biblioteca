import {Component, OnInit} from '@angular/core';
import {Libro} from '../libro';
import {LibroService} from '../libro.service';
import {LibroDetail} from '../libro-detail';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import 'rxjs/add/operator/filter';

/**
 * la liista de los libros
 */
@Component({
    selector: 'app-libro-list',
    templateUrl: './libro-list.component.html',
    styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

    /**
     * Constructor del componente 
     * 
     */
    constructor(private libroService: LibroService, private route: ActivatedRoute) {}

    /**
     * La lista de los libros del sistema de bibliotecas
     */
    libros: Libro[];
    /**
     * muestra o oculta el libros-create-component
     */
     showCreate:boolean;
     /**
      * el libro que el usuario ve
      */
      selectedLibro:Libro;
      
      /**
       * el id del libro que el usuario quiere ver
       */
       libro_id:number;
       
       /**
        * Muestra el libro
        */
       onSelected(libro_id:number):void{
           this.showCreate = false;
           this.libro_id = libro_id;
           this.selectedLibro=new LibroDetail();
       }
       
       /**
        * Pregunta el servicio para actualizar la lista de libros
        */
    getLibros(): void {
        this.libroService.getLibros().subscribe(libros => this.libros = libros);
    }
    
    /**
     * Muestra o esconde el componente creado
     */
         showHideCreate(): void {
        if (this.selectedLibro) {
            this.selectedLibro = undefined;
            this.libro_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    ngOnInit() {
        this.getLibros();
        this.showCreate = false;
    }

}
