import { Component, OnInit } from '@angular/core';

import{Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';


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
    * Muestra o oculta la edición de un usuario.
    */
    showEdit: boolean;
    
    /**
     * Muestra o oculta el detalle de un usuario.
     */
    showView: boolean;
    
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
        this.showEdit = false;
        this.showView = true;
        this.usuario_id = usuario_id;
        this.selectedUsuario = new UsuarioDetail();
        this.getUsuarioDetail();
    }
    getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_id)
            .subscribe(selectedUsuario => {
                this.selectedUsuario = selectedUsuario
            });
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
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
    updateUsuario(): void{
        this.showEdit = false;
        this.showView = true;
        this.getUsuarios();
    }
    
     /**
    * Shows or hides the create component
    */
    showHideEdit(usuario_id: number): void {
        if (!this.showEdit || (this.showEdit && usuario_id != this.selectedUsuario.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.usuario_id = usuario_id;
            this.selectedUsuario = new UsuarioDetail();
            this.getUsuarioDetail();
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
        this.selectedUsuario = undefined;
        this.usuario_id = undefined;
        this.showCreate = false;
        this.getUsuarios();
      }

}
