import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthService } from './auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [AuthSignUpComponent, AuthLoginComponent],
  providers: [AuthService],
  bootstrap: [AuthLoginComponent]
})
export class AuthModule { }
