import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SalaListComponent} from '../sala/sala-list/sala-list.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {ComentarioDetailComponent} from '../comentario/comentario-detail/comentario-detail.component';
import {BibliotecaListComponent} from '../biblioteca/biblioteca-list/biblioteca-list.component';
import { BibliotecaDetailComponent } from '../biblioteca/biblioteca-detail/biblioteca-detail.component';
import { PrestamoListComponent } from '../prestamo/prestamo-list/prestamo-list.component';
import { PrestamoDetailComponent } from '../prestamo/prestamo-detail/prestamo-detail.component';
import {LibroListComponent} from '../libro/libro-list/libro-list.component';
import {LibroDetailComponent} from '../libro/libro-detail/libro-detail.component';
import {VideoListComponent} from '../video/video-list/video-list.component';
import {VideoDetailComponent} from '../video/video-detail/video-detail.component';
import {LibroDigitalListComponent} from '../libro-digital/libro-digital-list/libro-digital-list.component';
import {LibroDigitalDetailComponent} from '../libro-digital/libro-digital-detail/libro-digital-detail.component';
import {VideoDigitalListComponent} from '../video-digital/video-digital-list/video-digital-list.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {SalaDetailComponent} from '../sala/sala-detail/sala-detail.component';
import {VideoDigitalDetailComponent} from '../video-digital/video-digital-detail/video-digital-detail.component';
import {UsuarioDetailComponent} from '../usuario/usuario-detail/usuario-detail.component';
import {ReservaListComponent} from '../reserva/reserva-list/reserva-list.component';

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
        path: 'prestamos',
        children:
        [
            {
                path: 'list',
                component: PrestamoListComponent
            },
            {
                path: ':id',
                component: PrestamoDetailComponent
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
            {
                path: ':id',
                component: LibroDetailComponent

            }

        ]
    },
    {
        path: 'comentarios',
        children: [
            {
                path: 'list',
                component: ComentarioListComponent
            },
            {
                path: ':id',
                component: ComentarioDetailComponent
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
        },
        {
          path: 'id',
          component: LibroDigitalDetailComponent
        }
      ]
    },
    {
      path: 'videosDigitales',
      children:[
        {
          path: 'list',
          component: VideoDigitalListComponent
        },
        {
          path: ':id',
          component: VideoDigitalDetailComponent
        }
      ]
    },
    {
        path: 'salas',
        children:[
            {
                path: 'list',
                component: SalaListComponent
            },
              {
                path: ':id',
                component: SalaDetailComponent
            }
        ]
    },
      {
        path: 'usuarios',
        children:[
            {
                path: 'list',
                component: UsuarioListComponent
            },
              {
                path: ':id',
                component: UsuarioDetailComponent
            }
        ]
    },
    {
      path: 'reservas',
      children:[
        {
          path: 'list',
          component: ReservaListComponent
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
