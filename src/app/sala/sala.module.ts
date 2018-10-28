import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaListComponent } from './sala-list/sala-list.component';
import{SalaService} from './sala.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SalaListComponent],
  exports:[SalaListComponent]
})
export class SalaModule { }
