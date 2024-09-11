import { Component, Input, input } from '@angular/core';
import { Customer } from '../../models/customerModel';
import { CUSTOMER_DATA } from '../../customer-data';
import { UserComponent } from '../user/user.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { GetCustomersComponent } from '../get-customers/get-customers.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [UserComponent, AddCustomerComponent, GetCustomersComponent],
  outputs: ['sendCustomer'],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customer: Customer | undefined ; 

  callCustomer():Customer {
    const randomCustomer = Math.floor(Math.random() * CUSTOMER_DATA.length);
    return this.customer = CUSTOMER_DATA[randomCustomer];  
  }

  reciveUser($event:Customer){
    this.customer = $event;
  }

}