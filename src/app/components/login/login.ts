import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
credentials = {
  usuario: '',
  password: ''
};

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.router.navigate(['/productos']);
      },
      error: (error) => {
        console.error('Login fallido', error);
        alert('Usuario o contraseña incorrectos.');
      }
    });
  }
}
