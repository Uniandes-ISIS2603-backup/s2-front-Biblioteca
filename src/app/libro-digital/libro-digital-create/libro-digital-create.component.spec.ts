import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDigitalCreateComponent } from './libro-digital-create.component';

describe('LibroDigitalCreateComponent', () => {
  let component: LibroDigitalCreateComponent;
  let fixture: ComponentFixture<LibroDigitalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDigitalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDigitalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
