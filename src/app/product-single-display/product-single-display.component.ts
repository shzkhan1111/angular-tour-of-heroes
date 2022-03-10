import { Component, Input, OnInit , EventEmitter , Output} from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-single-display',
  templateUrl: './product-single-display.component.html',
  styleUrls: ['./product-single-display.component.css']
})
export class ProductSingleDisplayComponent implements OnInit {

  constructor(private productService : ProductsService) { }
@Input()
productName : string
@Output() productClicked = new EventEmitter();
  ngOnInit(): void {
  }
  onClicked() {
    // this.productClicked.emit();
    this.productService.deleteProduct(this.productName)
  }

  

}
