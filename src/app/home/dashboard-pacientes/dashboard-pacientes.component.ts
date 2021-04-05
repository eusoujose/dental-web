import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '@app/_models/user';
import { MenuService, UserService } from '@app/_services';
import { first } from 'rxjs/operators';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';

@Component({
  selector: 'app-dashboard-pacientes',
  templateUrl: './dashboard-pacientes.component.html',
  styleUrls: ['./dashboard-pacientes.component.scss']
})
export class DashboardPacientesComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers(): void {
    // tslint:disable-next-line: deprecation
    this.userService.getAllPatients().pipe(first()).subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.sort = this.sort;
      this.sort.disableClear = true;
    });
  }

  openCadastroPaciente(): void {
    const dialogRef = this.dialog.open(CadastrarPacienteComponent, {
      height: '75vh',
      width: '75vw'
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

}
