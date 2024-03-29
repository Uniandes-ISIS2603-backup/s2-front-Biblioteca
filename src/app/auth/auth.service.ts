import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions';

@Injectable()
export class AuthService {

  constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  start(): void {
    this.permissionsService.flushPermissions();
    this.roleService.flushRoles();

    const role = localStorage.getItem('role');
    if(!role) {
      this.setGuestRole();
    }
    else if(role === 'ADMIN') {
      this.setAdministratorRole();
    }
    else {
      this.setClientRole();
    }
  }

  setGuestRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('GUEST', ['']);
  }

  setClientRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('CLIENT', ['']);
    localStorage.setItem('role', 'CLIENT');
  }

  setAdministratorRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ADMIN', ['']);
    localStorage.setItem('role', 'ADMIN');
  }

  printRole(): void {
    console.log(this.roleService.getRoles());
  }

  login(role): void {
    if(role === 'Administrator') {
      this.setAdministratorRole();
    }
    else {
      this.setClientRole();
    }
    this.router.navigateByUrl('/');
  }

  logout(): void {
    this.roleService.flushRoles();
    this.setGuestRole();
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }

}
