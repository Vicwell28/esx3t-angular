import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { errorDialog, successDialog } from 'src/app/layout/components/alert';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // validación de email añadida
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.sendForgotPasswordRequest(this.forgotPasswordForm.value);
    } else {
      errorDialog('Asegúrate de completar todos los campos del formulario correctamente.');
    }
  }

  sendForgotPasswordRequest(data: any) {
    this.isLoading = true;

    this.authService.forgotPassword(data).subscribe({
      next: (value) => {
        successDialog(value.message, () => {
          // redirigir a la página principal o al login, por ejemplo:
          this.router.navigate(['/sign-in']);
        });
      },
      error: (err) => {
        this.isLoading = false;
        const errMsg = err.error.error?.message || 'Ha ocurrido un error al procesar tu solicitud.';
        errorDialog(errMsg, () => {});
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}