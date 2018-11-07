import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoCreateComponent } from './prestamo-create.component';

describe('PrestamoCreateComponent', () => {
  let component: PrestamoCreateComponent;
  let fixture: ComponentFixture<PrestamoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
