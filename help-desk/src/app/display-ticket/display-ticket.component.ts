import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-ticket',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './display-ticket.component.html',
  styleUrl: './display-ticket.component.css'
})
export class DisplayTicketComponent {

constructor(private apiService: ApiService) {}



}
