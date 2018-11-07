import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaCreateComponent } from './biblioteca-create.component';

describe('BibliotecaCreateComponent', () => {
  let component: BibliotecaCreateComponent;
  let fixture: ComponentFixture<BibliotecaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
