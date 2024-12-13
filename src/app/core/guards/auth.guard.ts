import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Project Imports
import { ApiService } from '@core/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(ApiService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['LoginAdmin']);
    return false;
  }
};
