import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardPacientesComponent } from './dashboard-pacientes/dashboard-pacientes.component';
import { DashboardDentistasComponent } from './dashboard-dentistas/dashboard-dentistas.component';
import { CadastrarPacienteComponent } from './dashboard-pacientes/cadastrar-paciente/cadastrar-paciente.component';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastrarDentistaComponent } from './dashboard-dentistas/cadastrar-dentista/cadastrar-dentista.component';

@NgModule({
  declarations: [HomeComponent, DashboardPacientesComponent, DashboardDentistasComponent, CadastrarPacienteComponent, CadastrarDentistaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
