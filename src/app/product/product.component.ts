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
                          public addproductServiceProd: AddproductService) { }


  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): FirebaseListObservable<any[]> {
    return this.angularFire.database.list('/products');
  }

  addProductToCart(key: any): void {
    // this.addproductServiceProd.product_added(key);
    // alert(key);
    this.products.forEach( item => console.log(item[key - 1] ));

  }

}
