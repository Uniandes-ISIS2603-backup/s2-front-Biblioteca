import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibroListComponent} from './libro-list/libro-list.component';
import {FormsModule} from '@angular/forms';
import {LibroService} from './libro.service';
import {LibroDetailComponent} from './libro-detail/libro-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { LibroCreateComponent } from './libro-create/libro-create.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [LibroListComponent, LibroDetailComponent, LibroCreateComponent],
    providers: [LibroService],
    exports: [LibroListComponent]
})
export class LibroModule {}
