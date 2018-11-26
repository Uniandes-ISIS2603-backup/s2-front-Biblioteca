import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {BibliotecaService} from './biblioteca.service';
import {BibliotecaListComponent} from './biblioteca-list/biblioteca-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {BibliotecaDetailComponent} from './biblioteca-detail/biblioteca-detail.component';
import { BibliotecaCreateComponent } from './biblioteca-create/biblioteca-create.component';
import { BibliotecaEditComponent } from './biblioteca-edit/biblioteca-edit.component';


@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
  ],
  declarations: [BibliotecaListComponent, BibliotecaDetailComponent, BibliotecaCreateComponent, BibliotecaEditComponent],
  providers:[BibliotecaService]
})
export class BibliotecaModule { }
