import { Component } from '@angular/core';

import { CUSTOMER_DATA } from '../customer-data';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customer:any;

  callCustomer():any {
    const randomCustomer = Math.floor(Math.random() * CUSTOMER_DATA.length);
    return this.customer = CUSTOMER_DATA[randomCustomer];  
  }
}
