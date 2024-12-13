import { Component, inject, OnInit } from '@angular/core';

// Project Imports
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ColumnsComponent } from '@app/components/columns/columns.component';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, CarouselComponent, ColumnsComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit {
  private apiService = inject(ApiService);
  empresas: any[] = [];

  ngOnInit() {
    this.apiService.getEmpresas().subscribe((empresas: any[]) => {
      console.log(empresas);
      this.empresas = empresas;
    });
  }
}
