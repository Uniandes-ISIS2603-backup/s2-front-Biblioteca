import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ComentarioListComponent} from './comentario-list/comentario-list.component';
import {ComentarioService} from './comentario.service';
import {ComentarioDetailComponent} from './comentario-detail/comentario-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import {LibroModule} from '../libro/libro.module';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        LibroModule
    ],
    declarations: [ComentarioListComponent, ComentarioDetailComponent, ComentarioCreateComponent],
    providers: [ComentarioService],
    exports: [ComentarioListComponent]
})
export class ComentarioModule {}
