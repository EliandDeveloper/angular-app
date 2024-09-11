import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  api_url = 'http://localhost:5130/api/Customers/GetCustomers';

  constructor(private http: HttpClient) { }

  getCustomers():Observable<any>{ 
    return this.http.get(this.api_url).pipe(res => res);
  }


}
