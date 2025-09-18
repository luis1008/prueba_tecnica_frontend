import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // ✅ URL de tu backend de Laravel

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        // Guarda el token en el almacenamiento local del navegador
        localStorage.setItem('auth_token', response.access_token);
      })
    );
  }

  logout(): void {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    // Verifica si el token existe en el almacenamiento local
    return !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    // Obtiene el token
    return localStorage.getItem('auth_token');
  }
}
