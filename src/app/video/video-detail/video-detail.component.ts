import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class VideoDetailModule implements OnInit{
  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {}

  video_id: number;

  ngOnInit() {
    this.video_id = +this.route.snapshot.paramMap.get('id');
  }

}
