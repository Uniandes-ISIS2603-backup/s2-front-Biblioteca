import {Component, OnInit} from '@angular/core';
import {Libro} from '../libro';
import {LibroService} from '../libro.service';
import {ActivatedRoute} from '@angular/router';
//import 'rxjs/add/operator/filter';
@Component({
    selector: 'app-libro-list',
    templateUrl: './libro-list.component.html',
    styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

    constructor(private libroService: LibroService, private route: ActivatedRoute) {}

    libros: Libro[];
    getLibros(): void {
        this.libroService.getLibros().subscribe(libros => this.libros = libros);
    }
    ngOnInit() {
        this.getLibros();
    }

}
