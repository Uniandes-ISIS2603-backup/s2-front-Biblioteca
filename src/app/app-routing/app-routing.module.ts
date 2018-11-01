import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SalaListComponent} from '../sala/sala-list/sala-list.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {BibliotecaListComponent} from '../biblioteca/biblioteca-list/biblioteca-list.component';
import { BibliotecaDetailComponent } from '../biblioteca/biblioteca-detail/biblioteca-detail.component';
import {LibroListComponent} from '../libro/libro-list/libro-list.component';
import {VideoListComponent} from '../video/video-list/video-list.component';
import {VideoDetailComponent} from '../video/video-detail/video-detail.component';
import {LibroDigitalListComponent} from '../libro-digital/libro-digital-list/libro-digital-list.component';
import {VideoDigitalListComponent} from '../video-digital/video-digital-list/video-digital-list.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';

const routes: Routes =
[
    {
        path: 'bibliotecas',
        children:
        [
            {
                path: 'list',
                component: BibliotecaListComponent
            },
            {
                path: ':id',
                component: BibliotecaDetailComponent
            }

        ]

    },
    {
        path: 'libros',
        children: [
            {
                path: 'list',
                component: LibroListComponent
            }

        ]
    },
    {
      path: 'videos',
      children: [
        {
          path: 'list',
          component: VideoListComponent
        },
        {
          path: ':id',
          component: VideoDetailComponent
        }
      ]
    },
    {
      path: 'librosDigitales',
      children:[
        {
          path: 'list',
          component: LibroDigitalListComponent
        }
      ]
    },
    {
      path: 'videosDigitales',
      children:[
        {
          path: 'list',
          component: VideoDigitalListComponent
        }
      ]
    },
    {
        path: 'salas',
        children:[
            {
                path: 'list',
                component: SalaListComponent
            }
        ]
    },
      {
        path: 'usuarios',
        children:[
            {
                path: 'list',
                component: UsuarioListComponent
            }
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
