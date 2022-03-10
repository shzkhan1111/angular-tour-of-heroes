// for above if we add new productx we wnt seee it but also wont get error 
//b/c we ftch product 1 time

//use subj set up subs to get informed about changes 
import { Subject } from "rxjs";

import { Injectable } from '@angular/core';
// servicve has some funtionality that it wants to share across multiple components 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productUpdated = new Subject();
  private products = ['A Book from the servcei'];

  //add method to a service 
  addProduct(productName : string){
    this.products.push(productName);
    this.productUpdated.next();
  }

  getProducts(){
    // return this.products
//spread operator which will take the old array that will pull out all the elements 
//to add them as new elements to the new arrya 
//new copy of the array is created 
    return [...this.products]
  }

  deleteProduct(productName : string){
    this.products = this.products.filter(p=> p!==productName);
    this.productUpdated.next();
  }
  constructor() { }
}
