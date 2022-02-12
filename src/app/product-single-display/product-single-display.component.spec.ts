import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleDisplayComponent } from './product-single-display.component';

describe('ProductSingleDisplayComponent', () => {
  let component: ProductSingleDisplayComponent;
  let fixture: ComponentFixture<ProductSingleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSingleDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
