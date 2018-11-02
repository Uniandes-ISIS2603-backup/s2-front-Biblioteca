import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaDetailComponent } from './biblioteca-detail.component';

describe('BibliotecaDetailComponent', () => {
  let component: BibliotecaDetailComponent;
  let fixture: ComponentFixture<BibliotecaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
