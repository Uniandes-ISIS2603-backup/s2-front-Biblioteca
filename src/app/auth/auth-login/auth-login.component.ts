import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrService) { }

  user: User;
  roles: String[];

  login(): void {
    this.authService.login(this.user.role);
    this.toastrService.success('Logged in');
  }

  ngOnInit() {
    this.user = new User();
    this.roles = ['Administrator', 'Client'];
  }

}
