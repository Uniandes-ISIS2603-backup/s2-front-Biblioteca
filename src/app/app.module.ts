import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import {SalaModule} from './sala/sala.module';
import {ComentarioModule} from './comentario/comentario.module'
import {LibroModule} from './libro/libro.module';
import { VideoModule } from './video/video.module';
import { PrestamoModule } from './prestamo/prestamo.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BibliotecaModule,
    SalaModule,
    ComentarioModule,
    LibroModule,
    VideoModule,
    PrestamoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
