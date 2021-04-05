import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Role } from '../_models/roles';
import { RoleGuard } from '../_helpers/role.guard';
import { DashboardDentistasComponent } from './dashboard-dentistas/dashboard-dentistas.component';
import { DashboardPacientesComponent } from './dashboard-pacientes/dashboard-pacientes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dentistas', component: DashboardDentistasComponent, canActivate: [RoleGuard], data: { auth: [Role.admin]}},
  {path: 'pacientes', component: DashboardPacientesComponent, canActivate: [RoleGuard], data: { auth: [Role.admin, Role.operador]}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
