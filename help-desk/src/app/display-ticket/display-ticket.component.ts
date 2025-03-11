import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-ticket',
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './display-ticket.component.html',
  styleUrl: './display-ticket.component.css'
})
export class DisplayTicketComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  id!: number;
  tickets: any[] = [];
  resolvedBy!: number;
  ticketId!: number;
  description!: string;

  getTicketById(id: number): void {
    this.apiService.getTicketById(this.id).subscribe();
    
  }

  ngOnInit(): void {
    this.apiService.getTicketById(this.id).subscribe(
      data => {
        this.tickets = data as any[];
      }
    )
  }

  updateTicket(): void {
    this.apiService.updateTicket(this.id, this.resolvedBy).subscribe(() => {
      alert('Ticket resolved');
    });

  }

  createBookmark(): void {
    this.apiService.createBookmark(
      {
        TicketId: this.ticketId,
        Description: this.description
      }
   ).subscribe(() => {
      alert('Bookmark created successfully!');
    });
    
  }

  ticketFound = false;
  getTicketBoolean(): boolean {

    this.apiService.getTicketById(this.id);
    this.ticketFound = true;
    return this.ticketFound
  }

}
