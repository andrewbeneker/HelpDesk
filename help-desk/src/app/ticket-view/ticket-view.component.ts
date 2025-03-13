import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ticket-view',
  imports: [CommonModule, RouterLink, RouterModule, FormsModule, RouterOutlet ],
  templateUrl: './ticket-view.component.html',
  styleUrl: './ticket-view.component.css'
})
export class TicketViewComponent implements OnInit {
  params: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  id!: number;
  ticket: any;
  resolvedBy!: number;
  ticketId!: number;
  description!: string;

  ngOnInit(): void {
   this.route.params.subscribe(params => {
    this.ticketId = params['id'];
    console.log(this.ticketId)
    this.apiService.getTicketById(this.ticketId).subscribe(
      data => {
        this.ticket = data as any;
      }
    )
   }

   )
  }

  getTicketById(id: number): void {
    console.log(id)
    this.apiService.getTicketById(this.id).subscribe(
      data => {
        this.ticket = data as any;
      }
    )

  }


  update(): void {
    this.ticket = null;
    this.ticketId = 0;
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
}
