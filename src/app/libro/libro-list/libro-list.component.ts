import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
    constructor(private libroService: LibroService,
            private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {}

    /**
     * La lista de los libros del sistema de bibliotecas
     */
    libros: Libro[];
    /**
     * muestra o oculta el libros-create-component
     */
     showCreate:boolean;
     
     /**
     * muestra o oculta el libros-prestamo-component
     */
     showPrestamo:boolean;
     
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
           this.showPrestamo = false;
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
        this.showPrestamo = false;
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
    /**
     * Muestra o esconde el componente creado
     */
    showHidePrestamo(): void {
        this.showPrestamo = true;
        this.showView = false;
        this.showEdit = false;
        this.showCreate = false;
    }
    
     updateLibro(): void{
        this.showPrestamo = false;
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
            this.showPrestamo = false;
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
        /**
    * Deletes a libro
    */
    deleteLibro(libroId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a libro',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this libro?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.libroService.deleteLibro(libroId).subscribe(() => {
                            this.toastrService.error("The ljbro was successfully deleted", "Libro deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
  ngOnInit() 
      {
        this.showPrestamo = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedLibro = undefined;
        this.libro_id = undefined;
        this.showCreate = false;
        this.getLibros();
      }

}
