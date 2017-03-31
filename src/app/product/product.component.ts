import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AddproductService } from 'app/addproduct.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: FirebaseListObservable<any[]>;

  constructor(public angularFire: AngularFire, 
              public addproductService: AddproductService
              ) { 
                this.addedProducts = addproductService.product_added;
            }

  addedProducts: string;

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): FirebaseListObservable<any[]> {
    return this.angularFire.database.list('/products');
  }

  addProductToCart(key: any): void {
    this.addproductService.product_added(key);
  }

}
