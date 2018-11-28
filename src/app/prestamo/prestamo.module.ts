import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { PrestamoService} from './prestamo.service';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoDetailComponent } from './prestamo-detail/prestamo-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        NgxPermissionsModule,
        FormsModule
  ],
  declarations: [PrestamoListComponent, PrestamoCreateComponent, PrestamoDetailComponent],
  providers:[PrestamoService],
  exports: [PrestamoListComponent]
})
export class PrestamoModule { }
