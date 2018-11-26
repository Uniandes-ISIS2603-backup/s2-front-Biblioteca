
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import {AppModule} from '../../app.module';
import {BibliotecaListComponent} from './biblioteca-list.component';
import {Biblioteca} from '../biblioteca';
import {BibliotecaService} from '../biblioteca.service';

describe('BibliotecaListComponent', () => {
  let component: BibliotecaListComponent;
  let fixture: ComponentFixture<BibliotecaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, BibliotecaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
});
