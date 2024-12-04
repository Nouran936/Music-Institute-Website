import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  standalone: false,

  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  branches = [
    {
      name: 'Main Branch',
      address: '123 Music Lane, Cairo, Egypt',
      phone: '+20 123 456 7890',
      email: 'main&#64;kytharaInstitute.com',
    },
    {
      name: 'Alexandria Branch',
      address: '456 Harmony Street, Alexandria, Egypt',
      phone: '+20 987 654 3210',
      email: 'alex&#64;kytharaInstitute.com',
    },
  ];

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // onSubmit(): void {
  //   if (this.contactForm.valid){
  //     this.loading = true;
  //     const formData = this.contactForm.value;
  //     // console.log('Form Submitted', this.contactForm.value);
  //     // this.http.post('http://localhost:3000/contact', formData).pipe(
  //     //   catchError((error) => {
  //     //     console.error('Error submitting form', error);
  //     //     return[]
  //     //   })
  //     // ).subscribe(
  //     //   (response: any) =>{
  //     //     console.log('Form submitted successfully: ', response);
  //     //     this.contactForm.reset();
  //     //   },
  //     //   (error: any)=>{
  //     //     console.error('Error submitting form: ', error);
  //     //   }
  //     // );

  //     this.http.post('http://localhost:3000/contact', formData).subscribe(
  //       (response)=>{
  //         this.loading = false;
  //         this.successMessage = 'Your message has been sent successfully!';
  //         this.contactForm.reset();
  //       },
  //       (error) => {
  //         this.loading = false;
  //         this.errorMessage = 'There was an error submitting your message. Please, try again.'
  //       }
  //     );
  //   }
  //   else{
  //     console.log('Form is invalid');
  //   }
  // }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.loading = true;
      const formData = this.contactForm.value;


      this.http.post('http://localhost:3000/contact', formData).subscribe(
        (response) => {
          this.loading = false;
          this.successMessage = 'Your message has been sent successfully!';
          this.contactForm.reset();
        },
        (error) => {
          this.loading = false;
          this.errorMessage = 'There was an error submitting your message. Please try again.';
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

}

