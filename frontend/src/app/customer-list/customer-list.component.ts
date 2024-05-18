import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
//styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  
  constructor(private http:HttpClient) { }

  obj: any;

  ngOnInit(): void {
    this.obj = this.http.get("http://localhost:8000/api/customers/").subscribe(
      data => this.obj = data
    )
    }
}
