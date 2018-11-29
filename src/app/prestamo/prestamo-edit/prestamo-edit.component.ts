import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {PrestamoService} from '../prestamo.service';
import {PrestamoDetail} from '../prestamo-detail';
import { UsuarioService} from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.css'],
  providers: [DatePipe]
})
export class PrestamoEditComponent implements OnInit, OnChanges  {

  constructor
  (
        private prestamoService: PrestamoService,
        private usuarioService: UsuarioService,
        private toastrService: ToastrService,
  ) { }

   /**
    * 
    * El prestamo que llega por parametro
    */
    @Input() prestamo: PrestamoDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere devolver un prestamo.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere devolver un prestamo
    */
    @Output() update = new EventEmitter();
    
     /**
    * Actualización de la información de la biblioteca
    */
    editPrestamo(): void {
        this.prestamoService.updatePrestamo(this.prestamo)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("El prestamo fue entregado", "Entrega Prestamo");
            });
        
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
