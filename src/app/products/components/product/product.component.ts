import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductState } from '../../store/product.reducer';
import { Store, select } from '@ngrx/store';
import * as fromProductActions from '../../store/product.actions';
import { selectedProduct } from '../../store/product.selecters';
import { StoreCallsService } from '../../services/store-calls.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  public id_;
  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>,
    private storeCallService: StoreCallsService
  ) {}

  ngOnInit() {
    this.id_ = this.route.snapshot.paramMap.get('id')
    this.storeCallService.loadSingleProduct(this.id_)
    

    this.product$ = this.storeCallService.loadSingleProductData();
  }

  deleteProduct(id: string) {
   
    this.storeCallService.deleteProduct(id)
  }
}
