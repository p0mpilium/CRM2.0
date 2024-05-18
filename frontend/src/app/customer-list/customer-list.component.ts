import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    console.log('CustomerListComponent initialized');
    this.customerService.getCustomers().subscribe(data => {
      console.log('Data received:', data);
      this.customers = data;
    }, error => {
      console.error('Error fetching customers:', error);
    });
  }
}
