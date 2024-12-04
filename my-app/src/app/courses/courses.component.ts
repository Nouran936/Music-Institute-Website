import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = [];
  categories: string[] = [];
  // searchQuery: string = '';
  selectedCategory: string ='';
  searchTerm: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(private courseService: CourseService, private router: Router){}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void{
    this.courseService.getCourses().subscribe(
      (data) => {
        console.log('Fetched data:', data);
        this.courses = data;
        this.filteredCourses = data.slice(0, this.itemsPerPage);;
        this.categories = [...new Set(data.map((course: any) => course.category))] as string[];
        console.log('Categories: ', this.categories);
        // console.log('Courses array: ', this.courses);
      },
      (error) => {
        console.error('Error fetching courses: ', error);
      }
    );
  }


  applyFilters(): void{
    this.filteredCourses =this.courses.filter((course)=>{
      const matchesSearch = this.searchTerm === '' || course.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === '' || course.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
    this.currentPage = 1;
    this.updatePagination(this.filteredCourses);
  }

  updatePagination(filtered: any[]): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredCourses = filtered.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.courses.length) {
      this.currentPage++;
      this.updatePagination(this.courses);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination(this.courses);
    }
  }

  goToCourseDetails(courseId: string){
    this.router.navigate([`/courses/${courseId}`]);
  }

}
