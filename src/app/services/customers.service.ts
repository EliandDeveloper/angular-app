import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers():Observable<any>{ 
    return this.http.get<any>(endpoints.customers);
  }

  addCustomer(customer: any):Observable<any>{
    return this.http.post<any>(endpoints.addCustomer, customer);
  }

}
