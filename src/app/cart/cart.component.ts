import { Component, OnInit } from '@angular/core';
import { AddproductService } from 'app/addproduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  constructor(public addproductService: AddproductService) { 
    this.product = addproductService.product_added;
  }

  ngOnInit() {
  }

}
