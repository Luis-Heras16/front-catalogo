import { Router } from '@angular/router';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() empresas: any[] = [];

  private router = inject(Router);

  goToEmpresa(id: string) {
    this.router.navigate(['/empresa'], {
      queryParams: { empresaId: id },
    });
  }
}
