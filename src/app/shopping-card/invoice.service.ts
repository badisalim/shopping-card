import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './invoice-container/invoice-container.component';
import { HttpClient } from '@angular/common/http';


export interface Product {

  id: number;
  name: string;
  quantity: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host = 'http://localhost:3000/invoice';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.host);
  }
  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('${this.host}/${id}');
  }

  addProduct(product: Product) {
    console.log("1234", product);
    return this.httpClient.post(this.host, product).subscribe(data => console.log(data));
  }
  editProduct(product: Product) {
    return this.httpClient.put(this.host, product);

  }
  deleteProduct(id: number) {
    return this.httpClient.delete<Product>('${this.host}/${id}');

  }

}
