import { Component, OnInit , OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit , OnDestroy {

  productName = 'A book';  
  isDisabled = true
  products = ['A Book' , 'A Tree']
  private productsSubscription : Subscription;
  
  //add a param to constructor , injecting service 
  // it tells when creating the compo.. it will need an argument of this type
  //and we will provide it in the app.module 
  //add a private or public infront of it -> will not only recieve it as an argument but also a 
  //class property 
  constructor(private productsService : ProductsService) {
    setTimeout(() => {
      // function exe after 3 sec
      // Book will be replaced by a tree
      this.productName = 'A Tree'
    }, 3000);
   }

  ngOnInit(): void {
    //exe methd when it creates teh comp after the ctor
    //it will keep us informeed about changes / pass a func
    this.productsSubscription =   this.productsService.productUpdated.subscribe(() => {
      //this code will run unlimited amount of times , whenevr the product changes
      //also good proctive to unsubscribe when we dont need it
      this.products = this.productsService.getProducts();
    })
    
  }
  
ngOnDestroy(): void {
  //when comp is teared donw
  //unsubscribe to previous subscription
  this.productsSubscription.unsubscribe();
}
  onAddProduct(form){
    // this.products.push(this.productName)
    this.productsService.addProduct(form.value.productName)
    this.products =  this.productsService.getProducts()
    console.log(form)
    //for only in case the product is Valid push it in teh array 
    if(form.valid){
      // this.products.push(form.value.productName);
    }
  }
  
  onRemoveProduct(productName:string){
    this.products=  this.products.filter(p => p!== productName);
  } 
  AddProductViaForm(form){
    console.log('via form')
    console.log(form)
    if(form.valid){
        this.products.push(form.value.productName)
    }
  }
}
