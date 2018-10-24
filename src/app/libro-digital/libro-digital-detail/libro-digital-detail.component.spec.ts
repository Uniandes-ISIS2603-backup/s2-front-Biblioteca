import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDigitalDetailComponent } from './libro-digital-detail.component';

describe('LibroDigitalDetailComponent', () => {
  let component: LibroDigitalDetailComponent;
  let fixture: ComponentFixture<LibroDigitalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDigitalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDigitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
