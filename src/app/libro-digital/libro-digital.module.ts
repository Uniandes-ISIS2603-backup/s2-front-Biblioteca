import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LibroDigitalService } from './libro-digital.service';
import { LibroDigitalListComponent } from './libro-digital-list/libro-digital-list.component';
import { LibroDigitalDetailComponent } from './libro-digital-detail/libro-digital-detail.component';
import { LibroDigitalCreateComponent } from './libro-digital-create/libro-digital-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [LibroDigitalListComponent, LibroDigitalDetailComponent, LibroDigitalCreateComponent],
  providers:[LibroDigitalService],
  exports: [LibroDigitalListComponent]
})
export class LibroDigitalModule { }
