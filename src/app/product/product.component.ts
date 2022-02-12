import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName = 'A book';  
  isDisabled = true
  products = ['A Book' , 'A Tree']
  constructor() {
    setTimeout(() => {
      // function exe after 3 sec
      // Book will be replaced by a tree
      this.productName = 'A Tree'
    }, 3000);
   }

  ngOnInit(): void {
  }
  onAddProduct(){
    this.products.push(this.productName)
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
