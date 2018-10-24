import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDigitalListComponent } from './libro-digital-list.component';

describe('LibroDigitalListComponent', () => {
  let component: LibroDigitalListComponent;
  let fixture: ComponentFixture<LibroDigitalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDigitalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDigitalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
