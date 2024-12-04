import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  adminUsername!: string;
  constructor(private router: Router){}
  ngOnInit(): void {
    const token = localStorage.getItem('adminToken');
    if(token){
      const decodedToken: any = this.decodeToken(token);
      this.adminUsername = decodedToken.username;
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  // navigateTo(section: string){
  //   this.router.navigate([`admin/dashboard/${section}`]);
  // }

  decodeToken(token: string) : any{
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  }

  logout(){
    localStorage.removeItem('adminToken');
    this.router.navigate(['/login']);
  }

  manageCourses(){
    this.router.navigate(['/admin/dashboard/manage-courses'])
  }

  manageInstructors(){
    this.router.navigate(['/admin/dashboard/manage-instructors'])
  }

  // manageEvents(){
  //   this.router.navigate(['/admin/dashboard/manage-events'])
  // }

  manageUsers(){
    this.router.navigate(['/admin/dashboard/manage-users'])
  }

  viewMessages() {
    this.router.navigate(['/admin/dashboard/view-messages']);
  }

}
