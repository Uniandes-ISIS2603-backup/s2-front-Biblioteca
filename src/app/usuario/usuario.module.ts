import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import{UsuarioService} from './usuario.service';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetailComponent],
  providers: [UsuarioService],
  exports:[UsuarioListComponent]
})
export class UsuarioModule { }
