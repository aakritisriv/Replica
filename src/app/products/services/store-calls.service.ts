import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../store/product.reducer';
import { loadProduct, updateProduct, addProduct } from '../store/product.actions';
import * as fromProductActions from '../store/product.actions';
import { selectedProduct, selectProducts } from '../store/product.selecters';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreCallsService {

  constructor(private store: Store<ProductState>) { }

  storeCall() {

    this.store.dispatch(fromProductActions.loadProducts());
   
   }
// This will fetch all products

  loadProducts() {

   return this.store.pipe(select(selectProducts));

  }
// this will fetch the single product from the store

loadSingleProduct(id){
 return this.store.dispatch(
    loadProduct({id: id})
  );
}


// This will fetch a single product to the form fields

  loadSingleProductData(){
    return this.store.pipe(select(selectedProduct))
  }

// Upload product into store

  uploadSingleProduct(data){
    this.store.dispatch(updateProduct({product: data}));
  }
// Add product to store

addSingleProduct(data){
  this.store.dispatch(addProduct({product: data}));
}

// Delete Product from store  
  deleteProduct(id: string) {
  
    return this.store.dispatch(fromProductActions.deleteProduct({id}));
  }
}
