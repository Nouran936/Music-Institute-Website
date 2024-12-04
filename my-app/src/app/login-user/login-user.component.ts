import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  standalone: false,

  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(): void {
    this.http.post<any>('http://localhost:3000/user/login', {
      email: this.email,
      password: this.password
    }).subscribe(
      (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/courses']);
      },
      (error) => {
        alert('Invalid credentials');
      }
    );
  }
  // login() {
  //   this.authService.login(this.email, this.password, 'user').subscribe(
  //     (response) => {
  //       localStorage.setItem('role', 'user'); // Store user role
  //       this.router.navigate(['/user-dashboard']);
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //     }
  //   );
  // }
}
