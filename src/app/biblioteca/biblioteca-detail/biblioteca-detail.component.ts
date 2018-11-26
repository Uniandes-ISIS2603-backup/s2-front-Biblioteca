import { Component,Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Biblioteca} from '../biblioteca';
import {BibliotecaService} from '../biblioteca.service';
import { BibliotecaDetail } from '../biblioteca-detail';

@Component({
  selector: 'app-biblioteca-detail',
  templateUrl: './biblioteca-detail.component.html',
  styleUrls: ['./biblioteca-detail.component.css']
})
export class BibliotecaDetailComponent implements OnInit {

    /**
    * The author
    */
    @Input() bibliotecaDetail: BibliotecaDetail;
  constructor(private bibliotecaService: BibliotecaService, private route: ActivatedRoute) { }
  
 

    /**
    * El id de la biblioteca que queremos
    */
    biblioteca_id: number;
    
    /**
    * El metodo que obtienen los detalles de la biblioteca que queremos
    */
    getBibliotecaDetail(): void {
        this.bibliotecaService.getBibliotecaDetail(this.biblioteca_id)
            .subscribe(bibliotecaDetail => {
                this.bibliotecaDetail = bibliotecaDetail
            });
    }
  ngOnInit() 
      {
           this.biblioteca_id = +this.route.snapshot.paramMap.get('id');
           if (this.biblioteca_id)
            {
             this.bibliotecaDetail = new BibliotecaDetail();
             this.getBibliotecaDetail();
            }
       }

}
