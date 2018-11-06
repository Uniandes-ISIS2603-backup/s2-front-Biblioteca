import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDigitalDetailComponent } from './video-digital-detail.component';

describe('VideoDigitalDetailComponent', () => {
  let component: VideoDigitalDetailComponent;
  let fixture: ComponentFixture<VideoDigitalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDigitalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDigitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



