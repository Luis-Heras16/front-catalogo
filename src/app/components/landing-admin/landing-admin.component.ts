import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-admin',
  standalone: true,
  imports: [],
  templateUrl: './landing-admin.component.html',
  styleUrl: './landing-admin.component.css'
})
export class LandingAdminComponent {
  private apiService = inject(ApiService)
  private router = inject(Router)

  logout() {
    this.apiService.logout();
    this.router.navigate(['/LoginAdmin']);
  }

}
