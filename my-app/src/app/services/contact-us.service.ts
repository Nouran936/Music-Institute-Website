import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private apiURL = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) { }

  submitContactForm(contactData: any): Observable<any>{
    return this.http.post<any>(this.apiURL, contactData);
  }
}
