import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';
// const jwt_decode = require('jwt-decode');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiURL = 'https://localhost:3000/'
  // constructor(private http: HttpClient) { }

  // login(email: string, password: string, role: string): Observable<any> {
  //   // Assuming an API endpoint that handles login
  //   return this.http.post(`${this.apiURL}/login`, { email, password, role });
  // }

  // logout() {
  //   localStorage.removeItem('role');
  // }

  // isLoggedIn(): boolean {
  //   return localStorage.getItem('role') !== null;
  // }

  // getRole(): string | null {
  //   return localStorage.getItem('role');
  // }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token;
  }

  isAdminAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return false;
    }
    return true;
    // const token = localStorage.getItem('accessToken');
    // return !!token;
  }
    // Check if the user is authenticated and has an admin role
    // isAdminAuthenticated(): boolean {
    //   const token = localStorage.getItem('accessToken');
    //   if (!token) {
    //     return false; // No token, so not authenticated
    //   }
    //   try {
    //     const decodedToken: any = jwtDecode(token);  // Decode the token
    //     return decodedToken?.role === 'admin';  // Check if the role is admin
    //   } catch (error) {
    //     console.error('Invalid token', error);
    //     return false;
    //   }
    // }


  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  clearToken(): void {
    localStorage.removeItem('accessToken');
  }
}
