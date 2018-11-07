import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoDetailComponent } from './prestamo-detail/prestamo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrestamoListComponent, PrestamoCreateComponent, PrestamoDetailComponent],
  exports: [PrestamoListComponent]  
})
export class PrestamoModule { }
