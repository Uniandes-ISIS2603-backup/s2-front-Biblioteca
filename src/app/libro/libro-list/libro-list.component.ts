import {Component, OnInit} from '@angular/core';

import {Libro} from '../libro';
import {LibroService} from '../libro.service';
import {LibroDetail} from '../libro-detail';

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
    constructor(private libroService: LibroService) {}

    /**
     * La lista de los libros del sistema de bibliotecas
     */
    libros: Libro[];
    /**
     * muestra o oculta el libros-create-component
     */
     showCreate:boolean;
     
     /**
    * Muestra o oculta la edición de un libro
    */
    showEdit: boolean;
    
    /**
     * Muestra o oculta el detalle de un libro
     */
    showView: boolean;
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
           this.showEdit = false;
           this.showView = true;
           this.libro_id = libro_id;
           this.selectedLibro=new LibroDetail();
           this.getLibroDetail();
       }
       
       
       getLibroDetail(): void {
        this.libroService.getLibroDetail(this.libro_id)
            .subscribe(selectedLibro => {
                this.selectedLibro = selectedLibro
            });
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
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
     updateLibro(): void{
        this.showEdit = false;
        this.showView = true;
        this.getLibros();
    }
    /**
    * Shows or hides the create component
    */
    showHideEdit(libro_id: number): void {
        if (!this.showEdit || (this.showEdit && libro_id != this.selectedLibro.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.libro_id = libro_id;
            this.selectedLibro = new LibroDetail();
            this.getLibroDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
  ngOnInit() 
      {
       
        this.showView = false;
        this.showEdit = false;
        this.selectedLibro = undefined;
        this.libro_id = undefined;
        this.showCreate = false;
        this.getLibros();
      }

}
