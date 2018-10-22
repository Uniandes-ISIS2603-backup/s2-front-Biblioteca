import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoListComponent } from './prestamo-list.component';

describe('PrestamoListComponent', () => {
  let component: PrestamoListComponent;
  let fixture: ComponentFixture<PrestamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
