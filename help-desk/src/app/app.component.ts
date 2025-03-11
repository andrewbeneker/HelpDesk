import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TicketComponent } from "./ticket/ticket.component";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { BookmarkComponent } from "./bookmark/bookmark.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicketComponent, TicketListComponent, BookmarkComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'help-desk';
}
