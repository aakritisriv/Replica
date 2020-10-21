import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectedProduct } from '../../store/product.selecters';
import { Update } from '@ngrx/entity';
import { ProductState } from '../../store/product.reducer';
import { StoreCallsService } from '../../services/store-calls.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [ ProductService ]
})
export class ProductEditComponent implements OnInit {
  public id_  
  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>,
    private storeCallService : StoreCallsService
  ) {}
  model: any = {};

  ngOnInit() {
    this.id_ = this.route.snapshot.paramMap.get('id')
    this.storeCallService.loadSingleProduct(this.id_)
    
    this.store
      .pipe(select(selectedProduct))
      .subscribe(
        product => (this.model = Object.assign(new Product(), product))
      );

  }

  onSubmit() {
    const update: Update<Product> = {
      id: this.model.id,
      changes: this.model
    };
    this.storeCallService.uploadSingleProduct(update)
  }
}
