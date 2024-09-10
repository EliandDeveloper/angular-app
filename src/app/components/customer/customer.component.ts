import { Component, Input, input } from '@angular/core';
import { Customer } from '../../models/customerModel';
import { CUSTOMER_DATA } from '../../customer-data';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customer: Customer = {
    customer_id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: {
        street: "",
        city: "",
        state: "",
        zip_code: "",
        country: ""
    },
    date_of_birth: "", 
    registration_date: "" 
};

  user: string = '';
  userCalled: boolean = false;

  callCustomer():Customer {
    const randomCustomer = Math.floor(Math.random() * CUSTOMER_DATA.length);
    return this.customer = CUSTOMER_DATA[randomCustomer];  
  }

  callUser(inputValue:string){

    CUSTOMER_DATA.forEach(customer => {
        if (inputValue == customer.first_name) {
           this.customer = customer;
           this.user = inputValue;
           this.userCalled = true;
        }else{
            this.userCalled = true;
        }
    });
  }

}