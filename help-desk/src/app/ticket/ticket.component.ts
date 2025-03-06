import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ticket',
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {

  tickets: any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getTickets().subscribe(
      data => {
        this.tickets = data as any[];
      }
    )
  }
}
