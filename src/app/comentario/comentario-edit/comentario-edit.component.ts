import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ComentarioService} from '../comentario.service';
import {ComentarioDetail} from '../comentario-detail';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-comentario-edit',
  templateUrl: './comentario-edit.component.html',
  styleUrls: ['./comentario-edit.component.css'],
  providers: [DatePipe]
})
export class ComentarioEditComponent implements OnInit , OnChanges  {

  constructor
  (
        private dp: DatePipe,
        private comentarioService: ComentarioService,
        private toastrService: ToastrService,
  ) { }
    
   /**
    * 
    * El id del comentario que se recibió del componente padre
    */
    @Input() comentario: ComentarioDetail;

     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere editar un comentario.
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que le dice al componente principal
    * que el usuario quiere editar un comentario
    */
    @Output() update = new EventEmitter();

    /**
    * Actualización de la información del comentario
    */
    editComentario(): void {
        let dateB: Date = new Date(this.comentario.fecha.year, this.comentario.fecha.month - 1, this.comentario.fecha.day);
        this.comentario.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.comentarioService.updateComentario(this.comentario)
            .subscribe(() => {
                this.toastrService.success("La información del comentario fue actualizada", "Comentario edition");
            });
        this.update.emit();
    }
  ngOnInit() {
      if (this.comentario && this.comentario.fecha)
      {
          this.comentario.fecha = this.comentario.fecha.substring (0,10)
          var date = 
          {
                day: + this.comentario.fecha.split('-')[2],
                month: + this.comentario.fecha.split('-')[1],
                year: + this.comentario.fecha.split('-')[0]
          };
          this.comentario.fecha = date;
      }
  }
  /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
