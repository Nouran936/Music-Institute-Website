import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: false,

  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<any[]>('http://localhost:3000/user')
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => {
          this.errorMessage = 'Failed to load users';
        }
      );
  }

  deleteUser(userId: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:3000/user/${userId}`)
        .subscribe(
          () => {
            alert('User deleted successfully');
            this.loadUsers();
          },
          (error) => {
            this.errorMessage = 'Failed to delete user';
          }
        );
    }
  }

  editUser(userId: string): void {
    this.router.navigate([`/admin/edit-user/${userId}`]);
  }

}
