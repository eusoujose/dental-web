import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { MenuService } from './_services';
import { User } from './_models';
import { Role } from './_models/roles';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit{
    currentUser: User;
    permissionViewDentistas = [Role.admin];
    permissionViewPacientes = [Role.admin, Role.operador];
    showFiller = false;
    dentistas: boolean;
    pacientes: boolean;
    constructor(
        private router: Router,
        private menuService: MenuService,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
