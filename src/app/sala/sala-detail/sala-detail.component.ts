import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SalaService } from '../sala.service';
import { Sala } from '../sala';
import{SalaDetail} from '../sala-detail';


@Component({
  selector: 'app-sala-detail',
  templateUrl: './sala-detail.component.html',
  styleUrls: ['./sala-detail.component.css']
})
export class SalaDetailComponent implements OnInit {

  constructor(
        private salaService: SalaService,
        private route: ActivatedRoute
    ) { }
      /**
    * La sala que queremos mostrar
    */
    salaDetail: SalaDetail;
sala_id: number; 
getSalaDetail(): void {
        this.salaService.getSalaDetail(this.sala_id)
            .subscribe(salaDetail => {
                this.salaDetail = salaDetail
            });
}
  ngOnInit() {
       this.sala_id = +this.route.snapshot.paramMap.get('id');
       this.salaDetail = new SalaDetail();
            this.getSalaDetail();
  }

}
