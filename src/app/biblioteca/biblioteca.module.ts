import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {BibliotecaService} from './biblioteca.service';
import {BibliotecaListComponent} from './biblioteca-list/biblioteca-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {BibliotecaDetailComponent} from './biblioteca-detail/biblioteca-detail.component';
import { BibliotecaCreateComponent } from './biblioteca-create/biblioteca-create.component';


@NgModule({
  imports: [
     BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
  ],
  declarations: [BibliotecaListComponent, BibliotecaDetailComponent, BibliotecaCreateComponent],
  providers:[BibliotecaService],
  exports: [BibliotecaListComponent]
})
export class BibliotecaModule { }
