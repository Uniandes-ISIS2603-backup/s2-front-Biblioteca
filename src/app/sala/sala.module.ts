import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SalaListComponent } from './sala-list/sala-list.component';
import{SalaService} from './sala.service';
import { SalaDetailComponent } from './sala-detail/sala-detail.component';
import { SalaCreateComponent } from './sala-create/sala-create.component';
import { SalaEditComponent } from './sala-edit/sala-edit.component';



@NgModule({
  imports: [
     BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
  ],
  declarations: [SalaListComponent, SalaDetailComponent, SalaCreateComponent, SalaEditComponent],
  providers:[SalaService],
  exports:[SalaListComponent]
})
export class SalaModule { }
