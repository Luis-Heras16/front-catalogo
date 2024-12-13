// Angular Imports
import { ApiService } from '@core/api.service';
import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss',
})
export class LoginAdminComponent {
  private _snackBar = inject(MatSnackBar);

  private router = inject(Router);
  private apiService = inject(ApiService);

  private fb = inject(FormBuilder);
  public loginForm: FormGroup = this.fb.group({
    matricula: [''],
    contraseña: [''],
  });

  public openSnackbar(message: string, action: string, panelClass: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: [panelClass],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const { matricula, contraseña } = this.loginForm.value;
      this.apiService.login(Number(matricula), contraseña).subscribe({
        next: (response) => {
          this.openSnackbar(response.message, 'Cerrar', 'success-snackbar');
          if (response.message === 'Inicio de sesión exitoso') {
            this.router.navigate(['/LandingAdmin']);
          }
        },
        error: (error) => {
          if (error.status === 404) {
            this.openSnackbar(
              'Usuario o contraseña incorrectos',
              'Cerrar',
              'error-snackbar'
            );
          } else if (error.status === 500) {
            this.openSnackbar(
              'Error al iniciar sesión',
              'Cerrar',
              'warning-snackbar'
            );
          } else {
            this.openSnackbar(
              error.message ?? 'Error al iniciar sesión',
              'Cerrar',
              'default-snackbar'
            );
          }
        },
      });
    }
  }
}
