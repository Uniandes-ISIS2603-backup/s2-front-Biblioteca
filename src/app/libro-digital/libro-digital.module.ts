import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroDigitalService } from './libro-digital.service';
import { LibroDigitalListComponent } from './libro-digital-list/libro-digital-list.component';
import { LibroDigitalDetailComponent } from './libro-digital-detail/libro-digital-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibroDigitalListComponent, LibroDigitalDetailComponent],
  providers:[LibroDigitalService],
  exports: [LibroDigitalListComponent]
})
export class LibroDigitalModule { }
