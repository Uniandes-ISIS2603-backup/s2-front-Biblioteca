import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroListComponent } from './libro-list/libro-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibroListComponent],
  exports:[LibroListComponent]
})
export class LibroModule { }
