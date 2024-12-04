import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryEventsComponent } from './gallery-events/gallery-events.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageInstructorsComponent } from './manage-instructors/manage-instructors.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';
import { adminGuard } from './auth/admin.guard';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { userGuard } from './auth/user.guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "courses", component: CoursesComponent},
  {path: "courses/:id", component: CourseDetailsComponent, canActivate: [userGuard]},
  {path: "gallery-events", component: GalleryEventsComponent},
  {path: 'admin', component: LoginComponent},
  // {path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  // {path: 'admin/manage-courses', component: ManageCoursesComponent, canActivate: [AuthGuard]},
  // {path: 'admin/manage-instructors', component: ManageInstructorsComponent, canActivate: [AuthGuard]},
  // {path: 'admin/manage-events', component: ManageEventsComponent, canActivate: [AuthGuard]},
  // {path: 'admin/manage-users', component: ManageUsersComponent, canActivate: [AuthGuard]},
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'manage-courses', component: ManageCoursesComponent },
      { path: 'manage-instructors', component: ManageInstructorsComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-events', component: ManageEventsComponent },
      { path: 'view-messages', component: ViewMessagesComponent},
      { path: 'manage-users', component: ManageUsersComponent },

    ],
  },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'admin/edit-user/:id', component: EditUserComponent },

  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
