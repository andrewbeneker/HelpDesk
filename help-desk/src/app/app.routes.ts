import { Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';

export const routes: Routes = [
    {path: 'tickets', component: TicketComponent, outlet: 'tickets'},
    {path: 'ticket-list', component: TicketListComponent, outlet: 'ticketlist'},
    {path: 'bookmarks', component: BookmarkComponent, outlet: 'bookmark'},
    {path: 'display-ticket/:id', component: DisplayTicketComponent, outlet: 'displayticket' }

];
