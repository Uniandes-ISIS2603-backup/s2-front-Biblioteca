import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BibliotecaListComponent} from './biblioteca-list/biblioteca-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import {BibliotecaService} from './biblioteca.service';
import {BibliotecaDetailComponent} from './biblioteca-detail/biblioteca-detail.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [BibliotecaListComponent, BibliotecaDetailComponent],
  providers:[BibliotecaService],
  exports: [BibliotecaListComponent]
})
export class BibliotecaModule { }
