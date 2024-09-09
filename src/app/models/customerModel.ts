export interface Address {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  }
  
export interface Customer {
    customer_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: Address;
    date_of_birth: string;
    registration_date: string;  
  }