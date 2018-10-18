import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BibliotecaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
