import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-courses',
  standalone: false,

  templateUrl: './manage-courses.component.html',
  styleUrl: './manage-courses.component.css'
})
export class ManageCoursesComponent implements OnInit{
  courses: any[] = [];
  newCourse = {
    name:'',
    description:'',
    category: '',
    level: '',
    duration: '',
    price: 0,
    image: '',
    instructor: {name: '', bio: '', email: ''},
    syllabus: '',
    schedule: ''
  };
  errorMessage: string = '';
  isEditing: boolean = false;
  currentCourseId: string | null = null;

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.http.get('http://localhost:3000/courses').subscribe({
      // next: (response: any) => (this.courses = response),
      next: (response: any) => {
        this.courses = response.map((course: any) => ({
          ...course,
          enrolledUsers: course.enrolledUsers || [], 
        }));
      },

      error: (error) => (this.errorMessage = 'Failed to load courses'),
    });
  }

  // addCourse() {
  //   this.http.post('http://localhost:3000/courses', this.newCourse).subscribe({
  //     next: () => {
  //       this.loadCourses();
  //       this.newCourse = { name: '', description: '' };
  //     },
  //     error: () => (this.errorMessage = 'Failed to add course'),
  //   });
  // }

  // deleteCourse(courseId: string) {
  //   this.http.delete(`http://localhost:3000/courses/${courseId}`).subscribe({
  //     next: () => this.loadCourses(),
  //     error: (error) => (this.errorMessage = 'Failed to delete course'),
  //   });
  // }

  // addCourse() {
  //   const formattedCourse = {
  //     ...this.newCourse,
  //     syllabus: this.newCourse.syllabus.split(',').map(s => s.trim()),
  //     schedule: this.newCourse.schedule.split(',').map(s => s.trim())
  //   };

  //   this.http.post('http://localhost:3000/courses', formattedCourse).subscribe({
  //     next: () => {
  //       this.loadCourses();
  //       this.resetForm();
  //     },
  //     error: () => (this.errorMessage = 'Failed to add course'),
  //   });
  // }


  addCourse() {
    if (this.isEditing) {
      this.http.put(`http://localhost:3000/courses/${this.currentCourseId}`, this.newCourse).subscribe({
        next: () => {
          this.loadCourses();
          this.resetForm();
        },
        error: () => (this.errorMessage = 'Failed to update course'),
      });
    } else {
      this.http.post('http://localhost:3000/courses', this.newCourse).subscribe({
        next: () => {
          this.loadCourses();
          this.resetForm();
        },
        error: () => (this.errorMessage = 'Failed to add course'),
      });
    }
  }

  deleteCourse(courseId: string) {
    this.http.delete(`http://localhost:3000/courses/${courseId}`).subscribe({
      next: () => this.loadCourses(),
      error: () => (this.errorMessage = 'Failed to delete course'),
    });
  }

  resetForm() {
    this.newCourse = {
      name: '',
      description: '',
      category: '',
      level: '',
      duration: '',
      price: 0,
      image: '',
      instructor: { name: '', bio: '', email: ''},
      syllabus: '',
      schedule: '',

    };
  }

  editCourse(course: any) {
    this.newCourse = { ...course, syllabus: course.syllabus.join(','), schedule: course.schedule.join(',') };
    this.currentCourseId = course._id;
    this.isEditing = true;
  }
}
