import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
  
export class ProductService {

  constructor(private http: HttpClient, private serviceLog: LogService) { }

  getProducts() { 
    this.serviceLog.log('Hello)');
    return this.http.get('https://fakestoreapi.com/products');
  }

}
