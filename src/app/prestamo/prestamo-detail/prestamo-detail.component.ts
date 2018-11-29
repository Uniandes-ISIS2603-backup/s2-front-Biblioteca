import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Prestamo} from '../prestamo';
import {PrestamoService} from '../prestamo.service';
import {PrestamoDetail} from '../prestamo-detail';
@Component({
    selector: 'app-prestamo-detail',
    templateUrl: './prestamo-detail.component.html',
    styleUrls: ['./prestamo-detail.component.css']
})
export class PrestamoDetailComponent implements OnInit {

    constructor(private prestamoService: PrestamoService, private route: ActivatedRoute) {}

    /**
      * El prestamo que queremos mostrar
      */
    @Input() prestamoDetail: PrestamoDetail;

    /**
    * El id del prestamo que queremos
    */
    prestamo_id: number;

    /**
    * The method which retrieves the books of an editorial
    */
    getPrestamoDetail(): void {
        this.prestamoService.getPrestamoDetail(this.prestamo_id)
            .subscribe(prestamoDetail => {
                this.prestamoDetail = prestamoDetail
            });
    }
    ngOnInit() {
        this.prestamo_id = +this.route.snapshot.paramMap.get('id');
        if (this.prestamo_id) {
            this.prestamoDetail = new PrestamoDetail();
            this.getPrestamoDetail();
        }
    }

}
