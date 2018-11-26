import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {BibliotecaService} from '../biblioteca.service';
import {BibliotecaDetail} from '../biblioteca-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-biblioteca-edit',
  templateUrl: './biblioteca-edit.component.html',
  styleUrls: ['./biblioteca-edit.component.css'],
  providers: [DatePipe]
})
export class BibliotecaEditComponent implements OnInit, OnChanges  
{
    /**
    * Constructor for the component
    * @param bibliotecaService The biblioteca' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor
  (
        private bibliotecaService: BibliotecaService,
        private toastrService: ToastrService,
  ) { }
    
     /**
    * 
    * El id de la biblioteca que se recibió del componente padre
    */
    @Input() biblioteca: BibliotecaDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar una biblioteca.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar una biblioteca
    */
    @Output() update = new EventEmitter();
    
     /**
    * Actualización de la información de la biblioteca
    */
    editBiblioteca(): void {
        this.bibliotecaService.updateBiblioteca(this.biblioteca)
            .subscribe(() => {
                this.toastrService.success("La información de la biblioteca fue actualizada", "Biblioteca edition");
            });
        this.update.emit();
    }
    
    /**
    * Emite la señal para decirle al componente principal que el 
    * usuario ya no quiere editar una biblioteca
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
