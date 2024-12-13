import { Empresa } from '@app/core/types/vacante.interface';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';

// Project Imports
import { ApiService } from '@core/api.service';
import { TablaEmpresasComponent } from '../../components/tabla-empresas/tabla-empresas.component';
import { FormularioEmpresaComponent } from '../../components/formulario-empresa/formulario-empresa.component';

@Component({
  selector: 'app-landing-admin',
  standalone: true,
  imports: [TablaEmpresasComponent, FormularioEmpresaComponent],
  templateUrl: './landing-admin.component.html',
  styleUrl: './landing-admin.component.scss',
})
export class LandingAdminComponent implements OnInit {
  private router = inject(Router);
  private apiService = inject(ApiService);

  public empresas: Empresa[] = [];

  ngOnInit(): void {
    this.getEmpresas();
  }

  onEmpresasModificadas() {
    this.getEmpresas();
  }

  getEmpresas() {
    this.apiService.getEmpresas().subscribe({
      next: (response: Empresa[] | undefined) => {
        if (response) this.empresas = response;
      },
    });
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['/LoginAdmin']);
  }
}
