import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:7202/api';

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get(`${this.baseUrl}/Tickets`);
  }
  getTicketById(id: number){
    return this.http.get(`${this.baseUrl}/Tickets/{id}`);
  }

  updateTicket(id: number, resolvedBy: number ) {
    return this.http.put(`${this.baseUrl}/Tickets/${id}`, resolvedBy);
  }

  createTicket(ticket: {CustomerId: number, Title: string, Body: string, TicketOpen: boolean}) {
    return this.http.post(`${this.baseUrl}/Tickets`, ticket);
  }

  getBookmarks() {
    return this.http.get(`${this.baseUrl}/Bookmarks`);
  }
  createBookmark(bookmark: {TicketId: number, Description: string}) {
    return this.http.post(`${this.baseUrl}/Bookmarks`, bookmark);
  }
}
