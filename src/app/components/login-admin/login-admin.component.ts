import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  loginForm:FormGroup
  private apiService = inject(ApiService)
  private fb = inject(FormBuilder)
  private router = inject(Router)
  constructor(){
    this.loginForm = this.fb.group({
      matricula:[
        ""
      ], 
      contraseña:[
        ""
      ]
    })
  }

  onSubmit(){
    if (this.loginForm.valid) {
      const { matricula, contraseña } = this.loginForm.value;
      this.apiService.login(matricula, contraseña).subscribe(response => {
        console.log('Login successful', response);
        if (response.message === 'Inicio de sesión exitoso') {
          this.router.navigate(['/LandingAdmin']);
        }
      });
    }
  }
}
