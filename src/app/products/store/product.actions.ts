import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../models/product';

// get list of Products actions below three
export const loadProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product List Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List Effect] Load Products Failure',
  props<{ error: any }>()
);

// get individual product actions, below three
export const loadProduct = createAction(
  '[Product Components] Load Product',
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success',
  props<{ selectedProduct: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure',
  props<{ error: any }>()
);

// Add Product Action
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);


export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',
  props<{ product: Product }>()
);


export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failure',
  props<{ error: any }>()
);

// Edit Component Action
export const updateProduct = createAction(
  '[Product Edit Component] Update Product',
  props<{ product: Update<Product> }>()
);

// Delete Product Actions, below three
export const deleteProduct = createAction(
  '[Product Components] Delete Product',
  props<{ id: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product Delete Effect] delete Product Success',
  props<{ id: string }>()
);

export const deleteProductFailure = createAction(
  '[Product Delete Effect] Delete Product Failure',
  props<{ error: any }>()
);


