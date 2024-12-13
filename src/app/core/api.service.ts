import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';

// Project Imports
import { API_URL } from '@core/constants';
import type { Empresa } from '@core/types/vacante.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  public getEmpresas(): Observable<any> {
    const url: string = `${API_URL}/empresas/getAll`;
    return this.http.get<any>(url);
  }

  public getEmpresa(id: string): Observable<any> {
    const url: string = `${API_URL}/empresas/getOne/${id}`;
    return this.http.get<any>(url);
  }

  public eliminarEmpresa(id: string): Observable<any> {
    const url: string = `${API_URL}/empresas/deleteOne/${id}`;
    return this.http.delete<any>(url);
  }

  public crearEmpresa(empresa: Empresa): Observable<any> {
    const url: string = `${API_URL}/empresas/insert`;
    return this.http.post<any>(url, empresa);
  }

  public login(matricula: number, contraseña: string): Observable<any> {
    const url: string = `${API_URL}/auth/login`;
    return this.http.post<any>(url, { matricula, contraseña }).pipe(
      tap((response) => {
        if (response.message === 'Inicio de sesión exitoso')
          localStorage.setItem('isAuthenticated', 'true');
      })
    );
  }

  public logout() {
    localStorage.removeItem('isAuthenticated');
  }

  public isAuthenticated(): boolean {
    const flag = localStorage.getItem('isAuthenticated') === 'true';
    return flag;
  }
}
