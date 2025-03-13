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
export class DisplayTicketComponent {

  constructor(private apiService: ApiService) { }

  id!: number;
  ticket: any;
  resolvedBy!: number;
  ticketId!: number;
  description!: string;

  getTicketById(id: number): void {
    console.log(id)
    this.apiService.getTicketById(this.id).subscribe(
      data => {
        this.ticket = data as any;
      }
    )

  }

  resolveTicket(id: number) {
    this.ticket.id.ticketOpen = false;

  }

  update(): void {
    this.ticket = null;
    this.apiService.updateTicket(this.id, this.resolvedBy).subscribe();
    this.ticket.ticketOpen = false;
  }


  updateTicket(id: number, resolvedBy: number): void {
    console.log(id)
    this.apiService.updateTicket(this.id, this.resolvedBy).subscribe();
    this.ticket.ticketOpen = false;

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
