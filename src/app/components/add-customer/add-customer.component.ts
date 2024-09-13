import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCustomer } from '../../models/northwindCustomer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService: CustomersService) { }
  customer: AddCustomer = {
    changeUser: 0,
    changeDate: new Date(),
    companyName: '',
    contactName: '',
    contactTitle: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
    phone: '',
    fax: '',
    customerID: '',
  };

  ngOnInit(): void {
  }

  addCustomer() {
    this.customerService.addCustomer(this.customer).subscribe(response => {
      console.log('Customer added:', response);
    }, error => {
      console.error('Error adding customer:', error);
    });
  }
}
