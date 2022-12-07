import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]> {

    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/`;

    return this.httpClient.get<Customer[]>(customerUrl);
  }

}
