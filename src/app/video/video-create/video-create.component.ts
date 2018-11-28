import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Video } from '../video';
import { VideoService } from '../video.service';
import { Biblioteca } from '../../biblioteca/biblioteca';
import { BibliotecaService } from '../../biblioteca/biblioteca.service';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private bibliotecaService: BibliotecaService,
    private toastrService: ToastrService
  ) { }

  video: Video;
  bibliotecas: Biblioteca[];
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  getBibliotecas(): void {
    this.bibliotecaService.getBibliotecas().subscribe(bibliotecas => this.bibliotecas = bibliotecas);
  }

  createVideo(): Video {
    this.videoService.createVideo(this.video)
      .subscribe((video) => {
        this.video = video;
        this.create.emit();
        this.toastrService.success("El video fue creado", "Creacion del video");
      }, err => {
        this.toastrService.error(err, "Error")
      });
    return this.video;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.video = new Video();
    this.video.biblioteca = new Biblioteca();
    this.getBibliotecas();
  }

}
