import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { errorDialog, successDialog } from 'src/app/layout/components/alert';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { RolesIds } from 'src/app/core/enums/RolesIds';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.signUp(this.signUpForm.value);
    } else {
      errorDialog('Asegúrate de completar todos los campos del formulario.');
    }
  }

  signUp(data: any) {
    this.isLoading = true;

    this.authService.signUp(data).subscribe({
      next: (value) => {
        this.localStorageService.setItem('token', value.token.token);
        this.localStorageService.setItem('role', value.user.role_id);

        let rute = '';

        switch (value.user.role_id) {
          case RolesIds.Admin:
            rute = '/dashboard';
            break;
          case RolesIds.Empleado:
            rute = '/dashboard';
            break;
          case RolesIds.Cliente:
            rute = '/catalogo';
            break;
        }

        successDialog(value.message, () => {
          this.router.navigate([rute]);
        });

        this.isLoading = false;
      },
      error: (err) => {
        let errMsg = err.error.error.message;

        console.log(errMsg);

        if (!errMsg) {
          errorDialog('Verifica tus datos');
        }

        errMsg = (err.error.error.message.messages.errors as []).pop();

        if (!errMsg) {
          errorDialog(err.error.error.message);
        }

        errorDialog(`${errMsg.message} ${errMsg.field}`);
        this.isLoading = false;
      },
      complete: () => {
        console.warn('complete');
        this.isLoading = false;
      },
    });
  }
}
