import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Libro} from '../libro';
import {LibroService} from '../libro.service';
import {LibroDetail} from '../libro-detail';

import {Comentario} from '../../comentario/comentario';

@Component({
    selector: 'app-libro-detail',
    templateUrl: './libro-detail.component.html',
    styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

    /**
     * el libro que queremos mostrar
     */
    @Input() libroDetail: LibroDetail;    
    constructor(private libroService: LibroService, private route: ActivatedRoute) { }

    /**
     * el id del libro 
     */
    libro_id: number;
   
    /**
     * el metodo que devuelve los libros detallados
     */
    getLibroDetail(): void {
        this.libroService.getLibroDetail(this.libro_id)
            .subscribe(libroDetail => {
                this.libroDetail = libroDetail;
            });
    }
    ngOnInit() {
        this.libro_id = +this.route.snapshot.paramMap.get('id');
        if (this.libro_id)
        {
            this.libroDetail = new LibroDetail();
            this.getLibroDetail();
        }
    }

}
