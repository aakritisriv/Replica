import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductState } from '../../store/product.reducer';
import { Store } from '@ngrx/store';
import { addProduct } from '../../store/product.actions';
import { StoreCallsService } from '../../services/store-calls.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private store: Store<ProductState>,
    private storeCallService: StoreCallsService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    
   this.storeCallService.addSingleProduct(f.value)

  }
}
