import { Injectable } from '@angular/core';

@Injectable()
export class AddproductService {
  list_added_products = [];

  constructor() { }

  addProduct(new_product: any): void {
    /* TODO: validate if the product is already added just update the quantity, 
    *        avoid push it to list again 
    */

    var existProd = false;
    /* this boolean variable turn to true if the poduct is already added to list,
    * if the product doesn't exist the existProd variable keeps its value in false
    */

    new_product['UserproductCant'] = 1;
    if (this.list_added_products.length != 0){
      for(var i = 0; i < this.list_added_products.length; i++ ){
        if(this.list_added_products[i].id == new_product.id){
          existProd = true;
          break;
        } 
      }
      if(!existProd){
        this.list_added_products.push(new_product);
      } else {
        if(this.list_added_products[i].productCant > this.list_added_products[i].UserproductCant){
          this.list_added_products[i].UserproductCant = this.list_added_products[i].UserproductCant + 1;
        }
        
      }
    } else {
      this.list_added_products.push(new_product);
    }


    console.log(this.list_added_products);
  
  }

  // This method allow us to delete from list a selected product
  unlistproduct(index: number): void {
    this.list_added_products.splice((index), 1);
  }
}
