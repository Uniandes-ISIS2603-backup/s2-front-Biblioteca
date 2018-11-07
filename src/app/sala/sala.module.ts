import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalaListComponent } from './sala-list/sala-list.component';
import{SalaService} from './sala.service';
import { SalaDetailComponent } from './sala-detail/sala-detail.component';
import { SalaCreateComponent } from './sala-create/sala-create.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SalaListComponent, SalaDetailComponent, SalaCreateComponent],
  providers:[SalaService],
  exports:[SalaListComponent]
})
export class SalaModule { }
