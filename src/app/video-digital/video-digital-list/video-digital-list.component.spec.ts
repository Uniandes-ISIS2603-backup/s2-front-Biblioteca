import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import { VideoDigitalListComponent} from './video-digital-list.component';
import {VideoDigitalService} from '../video-digital.service';

describe('VideoDigitalListComponent', () => {
  let component: VideoDigitalListComponent;
  let fixture: ComponentFixture<VideoDigitalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, VideoDigitalService]
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
