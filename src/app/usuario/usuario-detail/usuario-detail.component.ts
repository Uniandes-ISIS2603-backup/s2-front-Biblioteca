import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import{UsuarioDetail} from '../usuario-detail';


@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  /**
    * El usuario que queremos mostrar
    */
   @Input() usuarioDetail: UsuarioDetail;
  constructor(
        private usuarioService: UsuarioService,
        private route: ActivatedRoute
    ) { }
    
    usuario_id: number; 
    /**
    * El metodo que obtienen los detalles del usuario que queremos
    */
getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_id)
            .subscribe(usuarioDetail => {
                this.usuarioDetail = usuarioDetail
            });
}
  ngOnInit() {
       this.usuario_id = +this.route.snapshot.paramMap.get('id');
      if (this.usuario_id)
      {
          this.usuarioDetail = new UsuarioDetail();
          this.getUsuarioDetail();
      }
  }

}
