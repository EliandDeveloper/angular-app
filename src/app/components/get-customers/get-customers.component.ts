import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { GetCustomers } from '../../models/northwindCustomer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-get-customers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-customers.component.html',
  styleUrl: './get-customers.component.css'
})
export class GetCustomersComponent implements OnInit {

  constructor(private customerService: CustomersService) { }
  customersList: GetCustomers[] = [];

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (result) => {
        this.customersList = result.data;
        console.log(this.customersList);
      },
      error: (error) => {
        console.log(error);
      }
    })
 }
}
