import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { FormsModule } from '@angular/forms';
import {ComentarioService} from './comentario.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ComentarioListComponent],
  providers:[ComentarioService],
  exports:[ComentarioListComponent]
})
export class ComentarioModule { }
