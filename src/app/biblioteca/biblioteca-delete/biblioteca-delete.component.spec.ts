import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaDeleteComponent } from './biblioteca-delete.component';

describe('BibliotecaDeleteComponent', () => {
  let component: BibliotecaDeleteComponent;
  let fixture: ComponentFixture<BibliotecaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
