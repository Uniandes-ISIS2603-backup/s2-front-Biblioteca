import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { BibliotecaModule } from './biblioteca/biblioteca.module';
import {SalaModule} from './sala/sala.module';
import {ComentarioModule} from './comentario/comentario.module'
import {LibroModule} from './libro/libro.module';
import { VideoModule } from './video/video.module';
import { VideoDigitalModule } from './videoDigital/videoDigital.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { LibroDigitalModule } from './libro-digital/libro-digital.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BibliotecaModule,
    SalaModule,
    ComentarioModule,
    LibroModule,
    VideoModule,
    VideoDigitalModule,
    PrestamoModule,
    LibroDigitalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
