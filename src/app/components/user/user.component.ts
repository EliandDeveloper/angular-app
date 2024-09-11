import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../../models/customerModel';
import { CUSTOMER_DATA } from '../../customer-data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Output() sendUser = new EventEmitter<Customer>();

  customer: Customer | undefined;
  
  user: string = '';
  userCalled: any = null;

  callUser(inputValue:string){

    CUSTOMER_DATA.forEach(customer => {
        if (inputValue == customer.first_name) {
           this.customer = customer;
           this.sendOuput();
           this.user = inputValue;
           this.userCalled = true;
        }else{
          this.userCalled = false;
        }
    });
  }

  sendOuput(){
    this.sendUser.emit(this.customer);
    console.log(this.customer);
  }
}
