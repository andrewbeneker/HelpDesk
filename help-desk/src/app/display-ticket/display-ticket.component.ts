import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-ticket',
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './display-ticket.component.html',
  styleUrl: './display-ticket.component.css'
})
export class DisplayTicketComponent {

  constructor(private apiService: ApiService) { }

  id!: number;

  getTicketById(id: number): void {
    this.apiService.getTicketById(this.id).subscribe();
  }

  ticketFound = false;
  getTicketBoolean(): boolean {

    this.apiService.getTicketById(this.id);
    this.ticketFound = true;
    return this.ticketFound
  }

}
