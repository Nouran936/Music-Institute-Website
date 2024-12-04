import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-instructors',
  standalone: false,

  templateUrl: './manage-instructors.component.html',
  styleUrl: './manage-instructors.component.css'
})
export class ManageInstructorsComponent implements OnInit {
  instructors : any[] = [];
  newInstructor = {name: '', bio: '', email: ''};
  errorMessage: string = '';

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.loadInstructors();
  }

  loadInstructors() {
    this.http.get('http://localhost:3000/instructors').subscribe({
      next: (response: any) => (this.instructors = response),
      error: () => (this.errorMessage = 'Failed to load instructors'),
    });
  }

  addInstructor() {
    this.http.post('http://localhost:3000/instructors', this.newInstructor).subscribe({
      next: () => {
        this.loadInstructors();
        this.newInstructor = { name: '', bio: '', email: '' };
      },
      error: () => (this.errorMessage = 'Failed to add instructor'),
    });
  }

  deleteInstructor(instructorId: string) {
    this.http.delete(`http://localhost:3000/instructors/${instructorId}`).subscribe({
      next: () => this.loadInstructors(),
      error: () => (this.errorMessage = 'Failed to delete instructor'),
    });
  }

}
