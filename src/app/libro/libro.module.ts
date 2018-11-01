import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroListComponent } from './libro-list/libro-list.component';
import { FormsModule } from '@angular/forms';
import {LibroService} from './libro.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibroListComponent],
  providers: [LibroService],
  exports:[LibroListComponent]
})
export class LibroModule { }
