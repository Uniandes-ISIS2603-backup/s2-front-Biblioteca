import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDigitalListComponent} from './video-digital-list.component';

describe('VideoDigitalListComponent', () => {
  let component: VideoDigitalListComponent;
  let fixture: ComponentFixture<VideoDigitalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDigitalListComponent ]
    })
    .compileComponents();
  }));

 
  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDigitalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
