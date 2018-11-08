import { Component, OnInit } from '@angular/core';
import{Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
     /**
     * La lista de usuarios
     */
    usuarios: Usuario[];
    
     /**
    * Muestra o oculta el usuario-create-component
    */
    showCreate: boolean;
   
     /**
     * el usuario que el usuario ve
     */
    selectedUsuario : Usuario;
    
    /**
    * El id del usuario que el usuario quiere ver
    */
   usuario_id: number;
    
    /**
    * Shows the usuario
    */
    onSelected(usuario_id: number):void {
        this.showCreate = false;
        this.usuario_id = usuario_id;
        this.selectedUsuario = new UsuarioDetail();
        
    }
    
    /**
     * Pregunta el servicio para actualizar la lista de usuarios
     */
    getUsuarios(): void {
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
    }

     /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedUsuario) {
            this.selectedUsuario = undefined;
            this.usuario_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
  ngOnInit() 
      {
        this.getUsuarios();
        this.showCreate = false;
      }

}
