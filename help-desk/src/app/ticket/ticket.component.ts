import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  CustomerId!: number;
  Title!: string;
  Body!: string;
  TicketOpen!: boolean;
  
  constructor(private apiService: ApiService) { }
  createTicket(): void {
    this.apiService.createTicket(
      {
        CustomerId: this.CustomerId,
        Title: this.Title,
        Body: this.Body,
        TicketOpen: true,
      }
   ).subscribe(() => {
      alert('Ticket created successfully!');
    });
    
  }


}
