import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: FirebaseListObservable<any[]>;

  constructor(public angularFire: AngularFire) {}

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): FirebaseListObservable<any[]> {
    return this.angularFire.database.list('/products');
  }

  addProductToCart(key: any): void {
    alert(key);
  }

}
