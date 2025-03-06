import { Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

export const routes: Routes = [
    {path: 'tickets', component: TicketComponent},
    {path: 'ticket-list', component: TicketListComponent},
    {path: 'bookmarks', component: BookmarkComponent},
    {path: '', redirectTo: 'ticket-list', pathMatch: 'full'}

];
