import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroDigitalListComponent } from './libro-digital-list/libro-digital-list.component';
import { LibroDigitalDetailComponent } from './libro-digital-detail/libro-digital-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibroDigitalListComponent, LibroDigitalDetailComponent],
  exports: [LibroDigitalListComponent]
})
export class LibroDigitalModule { }
