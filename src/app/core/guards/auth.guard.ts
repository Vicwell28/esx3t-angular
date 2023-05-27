import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let hasToken = localStorage.getItem('token');

  let hasRole = localStorage.getItem('role');

  let authRoutes = ['sign-in', 'forgot-password', 'sign-up'];

  let routeWhereUserGoing = route.routeConfig?.path!;

  console.log(routeWhereUserGoing);

  if (authRoutes.includes(routeWhereUserGoing) && hasRole && hasToken) {
    router.navigate(['/langing-page']);
    return false;
  }

  if (authRoutes.includes(routeWhereUserGoing) && !hasRole && !hasToken) {
    return true;
  }

  if (!hasRole || !hasToken) {
    router.navigate(['/sign-in']);
    return false;
  }

  let rolesViews = [
    {
      role_id: 1,
      views: ['dashboard', 'catalogo'],
    },
    {
      role_id: 2,
      views: ['dashboard', 'catalogo'],
    },
    {
      role_id: 3,
      views: ['catalogo'],
    },
  ];

  if (
    rolesViews
      .at(
        rolesViews.findIndex((value) => {
          return (value.role_id = parseInt(hasRole!));
        })
      )
      ?.views.includes(routeWhereUserGoing)
  ) {
    return true;
  }

  router.navigate(['/langing-page']);
  return false;
};
