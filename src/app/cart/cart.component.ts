import { Component, OnInit } from '@angular/core';
import { AddproductService } from 'app/addproduct.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  purshases: FirebaseListObservable<any[]>;
 
  constructor(public addproductService: AddproductService, public af: AngularFire) {}
 
  addtocart(e: any){
  this.addproductService.addProduct(e);
  }
 
  ngOnInit() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var date = dd + "-" + mm + "-" + yyyy;
    console.log(date);
    this.purshases = this.af.database.list(`user/purshases/${date}`);
  }
 
  unlistProduct(index: number): void{
    this.addproductService.unlistproduct(index);
  }
 
  submitpurshase(): void{
    this.purshases.push(this.addproductService.list_added_products).then(
      (data) => { 
        for(var i = 0; i < this.addproductService.list_added_products.length; i++){
          this.af.database.list('/products').update(
            this.addproductService.list_added_products[i].$key,
            { productCant: ( this.addproductService.list_added_products[i].productCant -  this.addproductService.list_added_products[i].UserproductCant) }
          ).then(
            (res) => {
              this.addproductService.list_added_products = [];
            }).catch(
              (err) => {
                console.log(err);
              })
        }
      }).catch(
        (err) => {
          console.log(err);
        });
  }
 
}