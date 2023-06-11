import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { loggedInGuard } from 'src/app/core/guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: LoginComponent,
    // canActivate: [loggedInGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    // canActivate: [loggedInGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    // canActivate: [loggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
