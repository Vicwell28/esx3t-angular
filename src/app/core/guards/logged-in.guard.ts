import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  let hasToken = localStorageService.getItem('token');
  let hasRole = localStorageService.getItem('role');

  let authRoutes = ['sign-in', 'forgot-password', 'sign-up'];
  let routeWhereUserGoing = route.routeConfig?.path!;

  if (authRoutes.includes(routeWhereUserGoing) && hasRole && hasToken) {
    router.navigate(['/langing-page']);
    return false;
  }

  return true;
};
