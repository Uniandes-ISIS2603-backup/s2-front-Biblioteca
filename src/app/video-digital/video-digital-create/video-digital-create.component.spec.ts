import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDigitalCreateComponent } from './video-digital-create.component';

describe('VideoDigitalCreateComponent', () => {
  let component: VideoDigitalCreateComponent;
  let fixture: ComponentFixture<VideoDigitalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDigitalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDigitalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
