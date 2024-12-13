import { Router } from '@angular/router';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-columns',
  imports: [],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss',
})
export class ColumnsComponent {
  @Input() empresas: any[] = [];

  private router = inject(Router);

  goToEmpresa(id: string) {
    this.router.navigate(['/empresa'], {
      queryParams: { empresaId: id },
    });
  }
}
