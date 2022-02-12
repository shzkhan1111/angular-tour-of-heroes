import { Component, Input, OnInit , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-product-single-display',
  templateUrl: './product-single-display.component.html',
  styleUrls: ['./product-single-display.component.css']
})
export class ProductSingleDisplayComponent implements OnInit {

  constructor() { }
@Input()
productName : string
@Output() productClicked = new EventEmitter();
  ngOnInit(): void {
  }
  onClicked() {
    this.productClicked.emit();
  }

  

}
