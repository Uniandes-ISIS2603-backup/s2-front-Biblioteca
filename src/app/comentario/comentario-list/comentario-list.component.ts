import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
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
  constructor(private comentarioService : ComentarioService,
          private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
  
    /**
     * la lista de comentarios
     */
  comentarios:Comentario[];
  
  /**
   * muestra o oculata el comentario-create-component
   */
   showCreate:boolean;
   
   /**
    * Muestra o oculta la edición de una biblioteca
    */
    showEdit: boolean;
    
    /**
     * Muestra o oculta el detalle de una biblioteca
     */
    showView: boolean;
    
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
          this.showEdit = false;
          this.showView = true;
          this.comentario_id = comentario_id;
          this.selectedComentario = new ComentarioDetail();
          this.getComentarioDetail();
      }
      
      getComentarioDetail(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id)
            .subscribe(selectedComentario => {
                this.selectedComentario = selectedComentario
            });
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
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
    updateComentario(): void{
        this.showEdit = false;
        this.showView = true;
        this.getComentarios();
    }
    
     /**
    * Shows or hides the create component
    */
    showHideEdit(comentario_id: number): void {
        if (!this.showEdit || (this.showEdit && comentario_id != this.selectedComentario.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.comentario_id = comentario_id;
            this.selectedComentario = new ComentarioDetail();
            this.getComentarioDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
     deleteComentario(comentarioId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an author',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this author from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.comentarioService.deleteComentario(comentarioId).subscribe(() => {
                            this.toastrService.error("The comentario was successfully deleted", "Comentario deleted");
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
  ngOnInit() {
      this.showView = false;
      this.showEdit = false;
      this.selectedComentario = undefined;
      this.comentario_id = undefined;
      this.showCreate = false;
      this.getComentarios();
  }

}
