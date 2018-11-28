import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {UsuarioService} from '../usuario.service';
import {UsuarioDetail} from '../usuario-detail';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit , OnChanges  {

  /**
    * Constructor for the component
    * @param usuarioService The usuario' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor
  (
        private usuarioService: UsuarioService,
        
        private toastrService: ToastrService,
  ) { }
  
   /**
    * 
    * El id del usuario que se recibió del componente padre
    */
    @Input() usuario: UsuarioDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar un usuario.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar un usuario.
    */
    @Output() update = new EventEmitter();
    
     /**
    * Actualización de la información de un usuario.
    */
    editUsuario(): void {
        this.usuarioService.updateUsuario(this.usuario)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información del usuario fue actualizada", "Usuario edition");
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
