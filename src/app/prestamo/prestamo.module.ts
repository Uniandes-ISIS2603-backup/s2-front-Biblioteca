import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrestamoListComponent],
  exports: [PrestamoListComponent]  
})
export class PrestamoModule { }
