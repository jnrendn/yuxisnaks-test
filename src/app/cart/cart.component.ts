import { Component, OnInit } from '@angular/core';
import { AddproductService } from 'app/addproduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public addproductService: AddproductService) {}

  addtocart(e: any){
  this.addproductService.addProduct(e);
  }

  ngOnInit() {
  }

}
