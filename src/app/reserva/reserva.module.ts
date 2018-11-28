import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReservaService } from './reserva.service';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
  ],
  declarations: [ReservaListComponent, ReservaCreateComponent, ReservaEditComponent, ReservaDetailComponent],
  providers:[ReservaService]
})
export class ReservaModule { }
