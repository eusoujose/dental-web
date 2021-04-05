import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cadastrar-dentista',
  templateUrl: './cadastrar-dentista.component.html',
  styleUrls: ['./cadastrar-dentista.component.scss']
})
export class CadastrarDentistaComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CadastrarDentistaComponent>,
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

  saveDentist({ value, valid }: { value: User, valid: boolean }): void {
    if ( valid === true ) {
      this.userService.saveDentist(value).pipe(first()).subscribe((res) => this.close());
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
