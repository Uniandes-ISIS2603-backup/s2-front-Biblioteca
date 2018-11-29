import {NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {LibroService} from './libro.service';
import {LibroListComponent} from './libro-list/libro-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {LibroDetailComponent} from './libro-detail/libro-detail.component';
import { LibroCreateComponent } from './libro-create/libro-create.component';
import { LibroEditComponent } from './libro-edit/libro-edit.component';
import { LibroPrestamoComponent } from './libro-prestamo/libro-prestamo.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgxPermissionsModule,
        NgbModule
    ],
    declarations: [LibroListComponent, LibroDetailComponent, LibroCreateComponent, LibroEditComponent, LibroPrestamoComponent],
    providers: [LibroService],

})
export class LibroModule {}
