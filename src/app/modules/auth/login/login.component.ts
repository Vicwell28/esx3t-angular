import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/enums/User';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { errorDialog, successDialog } from 'src/app/layout/components/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signUpForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.singIn(this.signUpForm.value);
    } else {
      errorDialog('Asegúrate de completar todos los campos del formulario.');
    }
  }

  singIn(data: any) {
    this.isLoading = true;

    this.authService.signIn(data).subscribe({
      next: (value) => {
        console.log('next');
        console.log(value);

        this.localStorageService.setItem('token', value.token.token);
        this.localStorageService.setItem('role', value.user.role_id);

        let rute = '';

        switch (value.user.role_id) {
          case User.Admin:
            rute = '/dashboard';
            break;
          case User.Empleado:
            rute = '/dashboard';
            break;
          case User.Cliente:
            rute = '/catalogo';
            break;
        }

        successDialog(value.message, () => {
          this.router.navigate([rute]);
        });
      },
      error: (err) => {
        this.isLoading = false;
        console.log('error');
        console.log(err)
        let errMsg = err.error.error.message;

        if (!errMsg) {
          console.log(err.error);
          errorDialog(err.error, () => {});
        }
        errorDialog(errMsg, () => {});
      },
      complete: () => {
        console.log('complete');
        this.isLoading = false;
      },
    });
  }
}
