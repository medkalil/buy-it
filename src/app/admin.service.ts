import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './core/product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  products: Product[] = PRODUCTS;
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product {
    return this.products.find((contact) => contact.id == id) as Product;
  }

  deleteContactById(id: number): Product[] {
    let index = this.products.findIndex((contact) => contact.id == id);
    return this.products.splice(index, 1);
  }

  addProduct(product: Product) {
    product.id = this.products[this.products.length - 1].id + 1;
    this.products.push(product);
  }
}
