import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-messages',
  standalone: false,

  templateUrl: './view-messages.component.html',
  styleUrl: './view-messages.component.css'
})
export class ViewMessagesComponent implements OnInit{

  messages : any[] = [];
  errorMessage: string = '';
  selectedMessage: any = {};
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.loadMessages();
  }
  loadMessages(): void{
    this.http.get('http://localhost:3000/admin/dashboard/view-messages')
      .subscribe({
        next: (response: any) => {
          this.messages = response;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load messages';
        }
      });
  }

  viewMessage(messageId: string): void{
    this.http.get(`http://localhost:3000/admin/dashboard/view-messages/${messageId}`)
      .subscribe({
        next: (response: any) => {
          this.selectedMessage = response;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load message';
        }
      });
  }

}
