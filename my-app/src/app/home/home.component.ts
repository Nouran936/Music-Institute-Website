import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scrollToSection(sectionId: string){
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
