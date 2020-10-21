import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssetState, assetsFeatureKey, selectAll } from './asset.reducer';

// This is the slice we want to grab
export const selectAssetState = createFeatureSelector<AssetState>(
    assetsFeatureKey
);

export const selectAssets = createSelector(selectAssetState, selectAll);

export const selectedAsset = createSelector(
    selectAssetState,
    (state: AssetState) => state.selectedAsset
    );
