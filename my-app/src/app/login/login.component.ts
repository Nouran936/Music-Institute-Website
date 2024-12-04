import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router){}

  login(){
    this.http.post('http://localhost:3000/admin/login', {username: this.username, password: this.password}).subscribe({
      next: (response: any) => {
        localStorage.setItem('adminToken', response.token);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid login credentials'
      }
    });
  }

  // login() {
  //   this.authService.login(this.username, this.password, 'admin').subscribe(
  //     (response) => {
  //       localStorage.setItem('role', 'admin'); // Store user role
  //       this.router.navigate(['/admin-dashboard']);
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //     }
  //   );
  // }

}
