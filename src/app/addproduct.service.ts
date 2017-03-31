import { Injectable } from '@angular/core';

@Injectable()
export class AddproductService {

  constructor() { this.product_added = "Juan Esteban Villa" }

  product_added: any;

  addProduct(new_product: any): void {
    this.product_added = new_product; 
  }

}
