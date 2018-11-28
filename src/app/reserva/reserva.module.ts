import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReservaService } from './reserva.service';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [ReservaListComponent, ReservaCreateComponent, ReservaEditComponent, ReservaDetailComponent],
  providers:[ReservaService],
  exports:[ReservaListComponent]
})
export class ReservaModule { }
