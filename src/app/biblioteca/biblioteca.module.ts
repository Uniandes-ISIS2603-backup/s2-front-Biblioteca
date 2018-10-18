import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaListComponent } from './biblioteca-list/biblioteca-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BibliotecaListComponent],
  exports: [BibliotecaListComponent]
})
export class BibliotecaModule { }
