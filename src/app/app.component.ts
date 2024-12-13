import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Project Imports
import { MainLayoutComponent } from "@layout/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogo';
}
