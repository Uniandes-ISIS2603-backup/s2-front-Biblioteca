import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoDetailComponent } from './prestamo-detail.component';

describe('PrestamoDetailComponent', () => {
  let component: PrestamoDetailComponent;
  let fixture: ComponentFixture<PrestamoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
