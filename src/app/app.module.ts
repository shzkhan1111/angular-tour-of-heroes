import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from "@angular/forms";
import { ProductSingleDisplayComponent } from './product-single-display/product-single-display.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductSingleDisplayComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
