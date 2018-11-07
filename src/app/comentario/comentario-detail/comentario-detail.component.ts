import { Component, OnInit } from '@angular/core';
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
  
  comentarioDetail:ComentarioDetail;
  
  comentario_id : number;
  
  getComentarioDetail():void {
      this.comentarioService.getComentarioDetail(this.comentario_id).subscribe(comentarioDetail => {this.comentarioDetail = comentarioDetail})
  }
  

  ngOnInit() {
      
      this.comentario_id = +this.route.snapshot.paramMap.get('id');
      this.comentarioDetail = new ComentarioDetail();
      this.getComentarioDetail()
  }

}
