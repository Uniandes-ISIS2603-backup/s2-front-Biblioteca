import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDigitalEditComponent } from './video-digital-edit.component';

describe('VideoDigitalEditComponent', () => {
  let component: VideoDigitalEditComponent;
  let fixture: ComponentFixture<VideoDigitalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDigitalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDigitalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
