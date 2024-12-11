import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink  } from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InfoPequeComponent } from './components/info-peque/info-peque.component';
import { LandingComponent } from './components/landing/landing.component';
import { InicioComponent } from './components/inicio/inicio.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,BarraComponent, CarruselComponent, InfoPequeComponent, LandingComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-catalogo';
}
