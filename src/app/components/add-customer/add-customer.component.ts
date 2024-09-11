import { Component } from '@angular/core';
import { Customer } from '../../models/customerModel';
import { CUSTOMER_DATA } from '../../customer-data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customer: Customer | undefined;

  addCustomer(first_name:string, last_name:string, email:string,
     city:string, state:string, zip:string){
    this.customer = {
      customer_id: CUSTOMER_DATA.length + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: '',
      date_of_birth: '',
      registration_date: '',
      address: {
        city: city,
        state: state,
        zip_code: zip,
        street: '',
        country: ''
      }
    }
    CUSTOMER_DATA.push(this.customer);
    console.log(CUSTOMER_DATA);
  }
}
