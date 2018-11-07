import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ComentarioService} from '../comentario.service';
import {Comentario} from '../comentario';
@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

    /**
     * Constructor del componente
     * @param comentarioService El proveedor de servicios de comentarios
     * @param toastrService The toastr to show messages to the user
     */
  constructor(
      private comentarioService: ComentarioService,
      private toastrService: ToastrService) { }

      /**
       * el nuevo comentario
       */
       comentario:Comentario;
       
          /**
    * The output which tells the parent component
    * that the user no longer wants to create a comentario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new comentario
    */
    @Output() create = new EventEmitter();

    /**
     * Crear un comentario
     */
        createComentario(): Comentario {
         console.log(this.comentario)
        this.comentarioService.createComentario(this.comentario)
            .subscribe((comentario) => {
                this.comentario = comentario;
                this.create.emit();
                this.toastrService.success("El comentario fue creado", "Creación de comentario");
                
            });
            return this.comentario;   
    }
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    /**
     * this function will initialize the component
     */
  ngOnInit() {
      this.comentario = new Comentario();
  }

}
