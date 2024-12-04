import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-events',
  standalone: false,

  templateUrl: './gallery-events.component.html',
  styleUrl: './gallery-events.component.css'
})
export class GalleryEventsComponent implements OnInit {

  upcomingEvents = [
    { name: 'Music Festival 2024', date: 'March 15, 2024', description: 'A festival showcasing talented musicians.', image: '/images/music-festival1.jpg' },
    { name: 'Instrument Workshop', date: 'April 10, 2024', description: 'A workshop for aspiring instrument players.', image: '/images/instrument-workshop.jpg' }
  ];

  pastEventPhotos = [
    '/images/past-event (1).jpg',
    '/images/past-event (2).jpg',
    '/images/past-event (3).jpg'
  ];

  constructor(){};
  ngOnInit(): void {
  }

}
