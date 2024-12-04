import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: false,

  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.http.post<any>('http://localhost:3000/user/signup', {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe(
      (response) => {
        this.router.navigate(['/login']);  
      },
      (error) => {
        // alert('Error during registration');
        this.errorMessage = error.error.message || 'Error during registration';
      }
    );
  }
}
