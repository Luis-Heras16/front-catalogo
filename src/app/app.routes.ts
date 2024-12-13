import { Routes } from '@angular/router';

// Project Imports
import { authGuard } from '@core/guards/auth.guard';
import { InicioComponent } from '@views/inicio/inicio.component';
import { EmpresaComponent } from '@views/empresa/empresa.component';
import { LoginAdminComponent } from '@views/login-admin/login-admin.component';
import { LandingAdminComponent } from '@views/landing-admin/landing-admin.component';

export const routes: Routes = [
  { path: 'empresa', component: EmpresaComponent },
  { path: 'LoginAdmin', component: LoginAdminComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'LandingAdmin', component: LandingAdminComponent, canActivate:[authGuard]},
];
