import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';

// Project Imports
import { ApiService } from '@app/core/api.service';
import Vacante, { Empresa } from '@app/core/types/vacante.interface';

@Component({
  selector: 'app-empresa',
  imports: [],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss',
})
export class EmpresaComponent implements OnInit {
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  public empresa: Empresa | undefined = undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>
      this.apiService
        .getEmpresa(params['empresaId'])
        .subscribe((res: Empresa | undefined) => (this.empresa = res))
    );
  }
}
