import { Component, OnInit } from '@angular/core';
import { StoreCallsService } from '../../services/store-calls.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './../../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title = 'My Products'
 
  products$: Observable<Product[]>;

  constructor(
    private storeService: StoreCallsService,
    public router: Router) {}

  ngOnInit() {
    this.storeService.storeCall();
    this.products$ = this.storeService.loadProducts() 
  }
  deleteProduct(id: string) {
    this.storeService.deleteProduct(id)
  }
}
