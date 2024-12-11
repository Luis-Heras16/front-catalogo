import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient)
  private apiUrl: string = 'http://localhost:3000/api'
  public getEmpresas(): Observable<any> {
    const url: string = `${this.apiUrl}/empresas/getAll`
    return this.http.get<any>(url)
  }
  public getEmpresa(id:string): Observable<any> {
    const url: string = `${this.apiUrl}/empresas/getOne/${id}`
    return this.http.get<any>(url)
  }
  public login(matricula:number, contraseña:string): Observable<any> {
    const url: string = `${this.apiUrl}/auth/login`
    return this.http.post<any>(url, {matricula,contraseña}).pipe(tap(response => {
      if (response.message === 'Inicio de sesión exitoso') localStorage.setItem("isAuthenticated", "true")
    }))
  }
  logout() {
    localStorage.removeItem('isAuthenticated');
  }

  isAuthenticated(): boolean {
    const flag = localStorage.getItem('isAuthenticated') === 'true';
    console.log(localStorage.getItem('isAuthenticated'))
    console.log(flag);
    return flag;
  }
  constructor() { }
}
