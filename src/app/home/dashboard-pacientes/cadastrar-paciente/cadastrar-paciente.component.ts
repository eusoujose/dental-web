import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.scss']
})
export class CadastrarPacienteComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CadastrarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  savePatient({ value, valid }: { value: User, valid: boolean }): void {
    console.log(value, valid);
    if ( valid === true ) {
      this.userService.savePatient(value).pipe(first()).subscribe((res) => this.close());
    } else {
      console.log('form inválido');
    }
  }

  getEmailErrorMessage(): string {
    if (this.form.controls.email.hasError('required')) {
      return 'Email é obrigatório';
    }

    return this.form.controls.email.hasError('email') ? 'Email inválido' : '';
  }

}
