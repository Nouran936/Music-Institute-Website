import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  achievements = [
    {icon: '/images/trophy.png', title: "Best Music Academy 2022", description: "Awarded the title of the best music academy for innovation and excellence."},
    { icon: '/images/microphone.png', title: 'Top Performance School', description: 'Recognized for producing top-tier musicians in the industry.' },
    { icon: '/images/global.png', title: 'Global Outreach', description: 'Established international partnerships to expand music education worldwide.' }
  ];

  teamMembers = [
    { name: 'John Doe', position: 'Founder & CEO', photo: '/images/john-doe.jpg' },
    { name: 'Jane Smith', position: 'Head of Music Production', photo: '/images/jane-smith.jpg' },
    { name: 'Mark Johnson', position: 'Lead Instructor', photo: '/images/mark-johnson.jpg' }
  ];

  clientReviews = [
    { name: 'Sarah Lee', position: 'Alumni', text: 'This academy helped me discover my true musical talent. The instructors are amazing!', photo: '/images/sarah-lee.jpg' },
    { name: 'Michael Brown', position: 'Student', text: 'I have learned so much here, and I am now confident in my music production skills!', photo: '/images/michael-brown.jpg' },
    { name: 'Michael Brown', position: 'Student', text: 'I have learned so much here, and I am now confident in my music production skills!', photo: '/images/michael-brown.jpg' }
  ];

  constructor(){}


  ngOnInit(): void {
  }

}
