import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { BibliotecaModule } from './biblioteca/biblioteca.module';
import {SalaModule} from './sala/sala.module';
import {ComentarioModule} from './comentario/comentario.module'
import {LibroModule} from './libro/libro.module';
import { VideoModule } from './video/video.module';
import { VideoDigitalModule } from './video-digital/video-digital.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { LibroDigitalModule } from './libro-digital/libro-digital.module';
import {UsuarioModule} from './usuario/usuario.module';
import { ReservaModule } from './reserva/reserva.module';
import {AuthModule} from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BibliotecaModule,
    SalaModule,
    ComentarioModule,
    LibroModule,
    VideoModule,
    VideoDigitalModule,
    PrestamoModule,
    ModalDialogModule.forRoot(),
    LibroDigitalModule,
    UsuarioModule,
    ReservaModule,
    AuthModule,
    ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
    NgbModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
