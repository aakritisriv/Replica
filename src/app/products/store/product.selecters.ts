import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productsFeatureKey, selectAll } from './product.reducer';

// This is the slice we want to grab
export const selectProductState = createFeatureSelector<ProductState>(
    productsFeatureKey
);

export const selectProducts = createSelector(selectProductState, selectAll);

export const selectedProduct = createSelector(
    selectProductState,
    (state: ProductState) => state.selectedProduct
    );
