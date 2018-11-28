import { Component,Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ReservaService} from '../reserva.service';
import { ReservaDetail } from '../reserva-detail';
@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  constructor(private reservaService: ReservaService, private route: ActivatedRoute) { }
  /**
   * Reserva que queremos ver
   */
  @Input() reservaDetail: ReservaDetail;
  
  /**
    * El id de la biblioteca que queremos
    */
    reserva_id: number;
    
  /**
    * El metodo que obtienen los detalles de la biblioteca que queremos
    */
    getReservaDetail(): void {
        this.reservaService.getReservaDetail(this.reserva_id)
            .subscribe(reservaDetail => {
                this.reservaDetail = reservaDetail
            });
    }
    
    ngOnInit() 
      {
           this.reserva_id = +this.route.snapshot.paramMap.get('id');
           if (this.reserva_id)
            {
             this.reservaDetail = new ReservaDetail();
             this.getReservaDetail();
            }
       }

}
