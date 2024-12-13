import { Component } from '@angular/core';

// Project Imports
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
