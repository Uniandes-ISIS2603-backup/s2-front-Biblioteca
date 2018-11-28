import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrService) { }

  user: User;

  roles: String[];

  signUp(): void {
    this.authService.login(this.user.role);
    this.toastrService.success('Successfully signed up');
  }

  ngOnInit() {
    this.user = new User();
    this.roles = ['Administrator', 'Client'];
  }

}
