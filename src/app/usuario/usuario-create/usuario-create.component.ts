 import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';
@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
  private toastrService: ToastrService
  ) { }
  /**
    * El nuevo usuario
    */
    usuario: Usuario;
    
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new usuario
    */
    @Output() create = new EventEmitter();
        /**
    * Crear un usuario
    */
    createUsuario(): Usuario {
         console.log(this.usuario)
        this.usuarioService.createUsuario(this.usuario)
            .subscribe((usuario) => {
                this.usuario = usuario;
                this.create.emit();
                this.toastrService.success("El usuario fue creado", "Creación de usuario");
                
            });
            return this.usuario;
        
    }
  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an usuario
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() 
    {
           this.usuario = new Usuario();
    } 

}