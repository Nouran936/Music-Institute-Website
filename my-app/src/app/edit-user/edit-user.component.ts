import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: false,

  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  userId: string = '';
  name: string = '';
  email: string = '';
  role: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    this.http.get<any>(`http://localhost:3000/user/${this.userId}`)
      .subscribe(
        (response) => {
          this.name = response.name;
          this.email = response.email;
        },
        (error) => {
          console.error('Error fetching user details', error);
        }
      );
  }

  updateUser(): void {
    const updatedUser = { name: this.name, email: this.email };
    this.http.put<any>(`http://localhost:3000/user/${this.userId}`, updatedUser)
      .subscribe(
        (response) => {
          alert('User updated successfully');
          this.router.navigate(['/admin/manage-users']);
        },
        (error) => {
          console.error('Error updating user:', error);
          alert('Error updating user');
        }
      );
  }

}
