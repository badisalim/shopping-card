import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  quantity: number;
  price: number;
}


@Component({
  selector: 'app-invoice-container',
  templateUrl: './invoice-container.component.html',
  styleUrls: ['./invoice-container.component.css']
})
export class InvoiceContainerComponent implements OnInit {
  private url = 'http://localhost:3000/shop/invoice';
  products$: Observable<Product[]>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.products$ = this.httpClient.get<Product[]>(this.url);
  }
}

