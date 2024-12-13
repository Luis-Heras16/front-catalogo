import { Router } from '@angular/router';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

// Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

// Project imports
import { ApiService } from '@app/core/api.service';
import type { Empresa } from '@app/core/types/vacante.interface';

@Component({
  selector: 'app-tabla-empresas',
  imports: [],
  templateUrl: './tabla-empresas.component.html',
  styleUrl: './tabla-empresas.component.scss',
})
export class TablaEmpresasComponent {
  @Input() empresas: Empresa[] = [];
  @Output() empresaEliminada = new EventEmitter<void>();

  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private apiService = inject(ApiService);

  goToEmpresa(id: string) {
    this.router.navigate(['/empresa'], {
      queryParams: { empresaId: id },
    });
  }

  borrarEmpresa(id: string) {
    this.apiService.eliminarEmpresa(id).subscribe({
      next: () => {
        this.empresaEliminada.emit();
        this.openSnackbar(
          'Empresa eliminada con éxito',
          'Cerrar',
          'success-snackbar'
        );
      },
      error: (error) => {
        if (error.status === 404) {
          this.openSnackbar(
            'Empresa no encontrada',
            'Cerrar',
            'error-snackbar'
          );
        } else if (error.status === 500) {
          this.openSnackbar(
            'Error al eliminar la empresa',
            'Cerrar',
            'warning-snackbar'
          );
        } else {
          this.openSnackbar('Error desconocido', 'Cerrar', 'default-snackbar');
        }
      },
    });
  }

  private openSnackbar(message: string, action: string, panelClass: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: [panelClass],
    });
  }
}
