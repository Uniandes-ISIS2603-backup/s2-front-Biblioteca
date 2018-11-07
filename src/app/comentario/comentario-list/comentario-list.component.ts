import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Comentario} from '../comentario';
import {ComentarioService} from '../comentario.service';
import {ComentarioDetail} from '../comentario-detail';
/**
 * la lista de los comentarios
 */
@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

    /**
     * Constructor del componente
     * @param comentarioService Los servicios del proveedor del comentario
     */
  constructor(private comentarioService : ComentarioService) { }
  
    /**
     * la lista de comentarios
     */
  comentarios:Comentario[];
  
  /**
   * muestra o oculata el comentario-create-component
   */
   showCreate:boolean;
   
   /**
    * el comentario que ve el usuario
    */
    selectedComentario:Comentario;
    
    /**
     * el id del comentario que el usuario quiere ver
     */
     comentario_id:number;
     
     /**
      * muestra el comentario
      */
      onSelected(comentario_id:number):void {
          this.showCreate = false;
          this.comentario_id = comentario_id;
          this.selectedComentario = new ComentarioDetail();
      }
      
      /**
       * Pregunta el servicio para actualizar la lista de comentarios
       */
   getComentarios(): void {
        this.comentarioService.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
    }

    /**
     * show or hides the create component
     */
        showHideCreate(): void {
        if (this.selectedComentario) {
            this.selectedComentario = undefined;
            this.comentario_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
  ngOnInit() {
      this.getComentarios();
      this.showCreate = false;
  }

}
