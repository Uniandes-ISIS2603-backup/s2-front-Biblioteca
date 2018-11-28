import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { UsuarioService } from './usuario.service';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';



@NgModule({
  imports: [
     BrowserModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgxPermissionsModule,
        NgbModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioEditComponent],
  providers:[UsuarioService],

})
export class UsuarioModule { }
