import { CSP_NONCE, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { User } from '../enums/User';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  let hasToken = localStorageService.getItem('token');
  let hasRole = localStorageService.getItem('role');

  let routeWhereUserGoing = route.routeConfig?.path!;

  if (!hasRole || !hasToken) {
    localStorageService.removeItem('token');
    localStorageService.removeItem('role');
    router.navigate(['/sign-in']);
    return false;
  }

  let rolesViews = [
    {
      role_id: User.Admin,
      views: ['dashboard', 'catalogo', 'profile'],
    },
    {
      role_id: User.Empleado,
      views: ['dashboard', 'catalogo', 'profile'],
    },
    {
      role_id: User.Cliente,
      views: ['catalogo', 'profile'],
    },
  ];

  if (
    rolesViews
      .find((value) => {
        return value.role_id === hasRole;
      })
      ?.views.includes(routeWhereUserGoing)
  ) {
    return true;
  }

  router.navigate(['/langing-page']);
  return false;
};
