import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TicketComponent } from '../ticket/ticket.component';
import { Routes, RouterModule, ActivatedRoute, RouterLink } from '@angular/router';
import { DisplayTicketComponent } from '../display-ticket/display-ticket.component';

@Component({
  selector: 'app-ticket-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  tickets: any[] = [];
  
  ngOnInit(): void {
    this.apiService.getTickets().subscribe(
      data => {
        this.tickets = data as any[];
      }
    )
  }


  id!: number;
  resolvedBy!: number;
  
  
  updateTicket(): void {
    this.apiService.updateTicket(this.id, this.resolvedBy).subscribe(() => {
      alert('Ticket resolved');
    });
    
  }

ticketFound = false;
getTicketById(): boolean {
  
  this.apiService.getTicketById(this.id);
  this.ticketFound = true;
  return this.ticketFound
}

}
