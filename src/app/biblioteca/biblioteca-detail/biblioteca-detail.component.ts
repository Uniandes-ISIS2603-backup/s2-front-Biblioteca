import { Component, OnInit } from '@angular/core';
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

  constructor(private bibliotecaService: BibliotecaService, private route: ActivatedRoute) { }
  
  /**
    * La biblioteca que queremos mostrar
    */
    bibliotecaDetail: BibliotecaDetail;

    /**
    * El id de la biblioteca que queremos
    */
    biblioteca_id: number;
    
    /**
    * The method which retrieves the books of an editorial
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
           this.bibliotecaDetail = new BibliotecaDetail();
            this.getBibliotecaDetail();
       }

}
