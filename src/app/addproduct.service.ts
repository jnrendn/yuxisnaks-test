import { Injectable } from '@angular/core';

@Injectable()
export class AddproductService {
  product_added: any;

  constructor() { }

  addProduct(new_product: any): void {
    this.product_added = new_product;
  }

}
