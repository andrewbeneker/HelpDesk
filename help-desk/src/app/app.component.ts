import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketComponent } from "./ticket/ticket.component";
import { TicketListComponent } from "./ticket-list/ticket-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicketComponent, TicketListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'help-desk';
}
