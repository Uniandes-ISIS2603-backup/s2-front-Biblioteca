import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
import { ComentarioDetail } from '../comentario-detail';

@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
  styleUrls: ['./comentario-detail.component.css']
})
export class ComentarioDetailComponent implements OnInit {

  constructor(
  private comentarioService:ComentarioService,
  private route:ActivatedRoute
  ) { }
  
  /**
   * el comentario que queremos mostrar
   */
  @Input() comentarioDetail: ComentarioDetail;
  
  /**
   * el id del comentario que queremos
   */
  comentario_id : number;
  
  /**
   * El metodo que devuelve los comentarios de un libro
   */
  getComentarioDetail():void {
      this.comentarioService.getComentarioDetail(this.comentario_id).subscribe(comentarioDetail => {this.comentarioDetail = comentarioDetail})
  }
  

  ngOnInit() {
      
      this.comentario_id = +this.route.snapshot.paramMap.get('id');
      if (this.comentario_id)
      {
          this.comentarioDetail = new ComentarioDetail();
          this.getComentarioDetail()
      }
  }

}
