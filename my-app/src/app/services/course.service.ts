import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiURL = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any>{
    return this.http.get<any>(this.apiURL);
  }

  getCourseById(id: string): Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createCourse(course: any): Observable<any>{
    return this.http.post(this.apiURL, course);
  }

    enrollInCourse(courseId: string): Observable<any> {
    // const token = localStorage.getItem('accessToken');
    // const headers = { 'Authorization': `Bearer ${token}` };
    
    // return this.http.post<any>(`${this.apiURL}/enroll`, { courseId }, { headers });
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return new Observable((observer) => {
        observer.error({ message: 'User not authenticated' });
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(
      `${this.apiURL}/enroll`,
      { courseId },
      { headers }
    );
  }
}
