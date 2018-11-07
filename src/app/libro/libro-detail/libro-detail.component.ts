import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import {LibroService} from '../libro.service';
import {Libro} from '../libro';
import {LibroDetail} from '../libro-detail';

import {Comentario} from '../../comentario/comentario';

@Component({
    selector: 'app-libro-detail',
    templateUrl: './libro-detail.component.html',
    styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

    constructor(
        private libroService: LibroService,
        private route: ActivatedRoute,
        private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    libro_id: number;
    libroDetail: LibroDetail;
    navigationSubscription;

    getLibroDetail(): void {
        this.libroService.getLibroDetail(this.libro_id)
            .subscribe(libroDetail => {
                this.libroDetail = libroDetail;
            });
    }
    ngOnInit() {
        this.libro_id = +this.route.snapshot.paramMap.get('id');
        this.libroDetail = new LibroDetail();
        this.getLibroDetail();
    }

}
