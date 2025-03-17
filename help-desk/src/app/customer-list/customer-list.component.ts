import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
constructor(private apiService: ApiService) { }

customers: any[] = [];
newCustomer: any = {firstName: '', lastName: '', email: '', phone: ''}

ngOnInit(): void {
  this.getCustomers();
  
}

getCustomers(): void {
  this.apiService.getCustomers().subscribe((data: any) => {
    this.customers = data;
  })
}

addCustomer(): void {
  if (this.newCustomer.firstName.trim()) {
  this.apiService.addCustomer(this.newCustomer).subscribe(() => {
    this.newCustomer = {firstName: '', lastName: '', email: '', phone: ''};
    this.getCustomers();
  })
}
}

}
