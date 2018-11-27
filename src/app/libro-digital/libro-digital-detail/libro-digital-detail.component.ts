import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { LibroDigital } from '../libro-digital';
import { LibroDigitalService } from '../libro-digital.service';
import { LibroDigitalDetail } from '../libro-digital-detail';

@Component({
  selector: 'app-libro-digital-detail',
  templateUrl: './libro-digital-detail.component.html',
  styleUrls: ['./libro-digital-detail.component.css']
})
export class LibroDigitalDetailComponent implements OnInit {

  @Input() libroDigitalDetail: LibroDigitalDetail;
  constructor(private libroDigitalService: LibroDigitalService, private route: ActivatedRoute) { }

  libroDigital_id: number;

  getLibroDigitalDetail(): void {
    this.libroDigitalService.getLibroDigitalDetail(this.libroDigital_id).subscribe(
      libroDigitalDetail => {
        this.libroDigitalDetail = libroDigitalDetail;
      }
    );
  }

  ngOnInit() {
    this.libroDigital_id = +this.route.snapshot.paramMap.get('id');
    if (this.libroDigital_id)
     {
      this.libroDigitalDetail = new LibroDigitalDetail();
      this.getLibroDigitalDetail();
     }
  }

}
