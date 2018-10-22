import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SalaListComponent} from '../sala/sala-list/sala-list.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {BibliotecaListComponent} from '../biblioteca/biblioteca-list/biblioteca-list.component';
import {LibroListComponent} from '../libro/libro-list/libro-list.component';

const routes: Routes = 
[
    {
        path: 'bibliotecas',
        children: 
        [
            {
                path: 'list',
                component: BibliotecaListComponent                
            }
            
        ]

    },
    {
        path: 'libros',
        children: [
            {
                path: 'list',
                component: LibroListComponent
            },
          
        ]
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
