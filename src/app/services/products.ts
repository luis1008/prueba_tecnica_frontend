import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://127.0.0.1:8000/api/products';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProducts(): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.get(this.apiUrl, { headers });
  }

  createProduct(product: any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.post(this.apiUrl, product, { headers });
  }

  updateProduct(id: string, product: any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.put(`${this.apiUrl}/${id}`, product, { headers });
  }

  deleteProduct(id: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.authService.getToken()}` };
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
