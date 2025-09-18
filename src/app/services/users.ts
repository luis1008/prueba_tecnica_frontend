import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUsers(): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.get(this.apiUrl, { headers });
  }

  getUser(id: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.get(`${this.apiUrl}/${id}`, { headers });
  }

  createUser(user: any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.post(this.apiUrl, user, { headers });
  }

  deleteUser(id: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
