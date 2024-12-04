import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-course-details',
  standalone: false,

  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  courseId!: string;
  // loading = true;

  constructor (private route: ActivatedRoute, private courseService: CourseService, private router: Router, private authService: AuthService){}
  ngOnInit(): void {

    this.courseId = this.route.snapshot.paramMap.get('id') || '';
    console.log('courseId:', this.courseId);
    if (this.courseId) {
      this.fetchCourseDetails();
    } else {
      console.error('No course ID found in the route');
    }
}

  fetchCourseDetails(): void{
    this.courseService.getCourseById(this.courseId).subscribe(
      (data) => {
        console.log('Fetched course details: ', data);
        this.course = data;
      },
      (error) =>{
        console.error('Error fetching course details: ', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }

  enrollNow(): void {
    // console.log('Enroll Now clicked for course:', this.course.name);
    // this.router.navigate(['/enroll', this.courseId]);
    if(!this.authService.isAdminAuthenticated()){
      alert('Please log in to enroll')
      this.router.navigate(['/login']);
      return;
    }
    this.courseService.enrollInCourse(this.courseId).subscribe(
      (response) => {
        alert('Successfully enrolled in the course!');
        this.router.navigate(['/courses']);
      },
      (error) => {
        alert(error.error.message || 'Error enrolling in the course');
      }
    );
  }
}




