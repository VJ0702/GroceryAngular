import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Method to get data from API
  getProducts(): Observable<any> {
    //return this.http.get('https://freetestapi.com/api/v1/products');
    return this.http.get('https://fakestoreapi.com/products');  // Calls the GET API
  }

  // Method to get Product by ID
  getProductById(id: number): Observable<any> {
    const url = `${'https://fakestoreapi.com/products'}/${id}`;  // Construct the URL with the id
    return this.http.get(url);  // Call API to get product by id
  }
}
