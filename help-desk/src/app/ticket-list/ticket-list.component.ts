import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ticket-list',
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

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
