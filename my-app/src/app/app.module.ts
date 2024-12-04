import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryEventsComponent } from './gallery-events/gallery-events.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageInstructorsComponent } from './manage-instructors/manage-instructors.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    GalleryEventsComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    CourseDetailsComponent,
    LoginComponent,
    DashboardComponent,
    ManageCoursesComponent,
    ManageInstructorsComponent,
    ManageEventsComponent,
    ManageUsersComponent,
    ViewMessagesComponent,
    LoginUserComponent,
    RegisterUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
