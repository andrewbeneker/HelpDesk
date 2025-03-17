import { Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const routes: Routes = [
    {path: 'ticket', component: TicketComponent},
    {path: 'ticket-list', component: TicketListComponent },
    {path: 'bookmark', component: BookmarkComponent},
    {path: 'display-ticket', component: DisplayTicketComponent },
    {path: 'customer-list', component: CustomerListComponent},
    {path: 'ticket-view/:id', component: TicketViewComponent}

];
