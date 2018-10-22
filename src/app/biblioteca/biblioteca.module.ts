import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BibliotecaListComponent} from './biblioteca-list/biblioteca-list.component';

import { FormsModule } from '@angular/forms';
import {BibliotecaService} from './biblioteca.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BibliotecaListComponent],
  providers:[BibliotecaService],
  exports: [BibliotecaListComponent]
})
export class BibliotecaModule { }
