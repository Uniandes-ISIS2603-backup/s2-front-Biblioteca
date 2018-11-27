import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {LibroService} from '../libro.service';
import {LibroDetail} from '../libro-detail';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent implements OnInit, OnChanges {

 /**
    * Constructor for the component
    * @param libroService The libro' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor
  (
        private libroService: LibroService,
        
        private toastrService: ToastrService,
  ) { }

     /**
    * 
    * El id del libro que se recibió del componente padre
    */
    @Input() libro: LibroDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar un libro.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar un libro
    */
    @Output() update = new EventEmitter();
    
     /**
    * Actualización de la información de in libro
    */
    editLibro(): void {
        this.libroService.updateLibro(this.libro)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información del libro fue actualizada", "Libro edition");
            });
        
    }
    /**
    * Emite la señal para decirle al componente principal que el 
    * usuario ya no quiere editar un libro
    */
    cancelEdition(): void {
        this.cancel.emit();
    }
  /**
    * This function will initialize the component
    */
  ngOnInit() 
      {
       
      
        }
   /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
