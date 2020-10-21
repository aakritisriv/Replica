import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Asset } from '../models/asset';
import * as AssetActions from './asset.actions';

export const assetsFeatureKey = 'assets';

export interface AssetState extends EntityState<Asset> {
  // additional entities state properties
  error: any;
  selectedAsset: Asset;
}

export const adapter: EntityAdapter<Asset> = createEntityAdapter<Asset>();

export const initialState: AssetState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedAsset: undefined
});

const assetReducer = createReducer(
  initialState,
  
  // For create asset
  on(AssetActions.addAssetSuccess,
    (state, action) => adapter.addOne(action.asset, state)
  ),
  on(AssetActions.addAssetFailure,
    (state, action) => {
       return {
         ...state,
         error: action.error
       };
    }
  ),

  // For Get all asset
  on(AssetActions.loadAssetsSuccess, (state, action) =>
    adapter.addAll(action.assets, state)
  ),
  on(AssetActions.loadAssetsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),

  // For Get individual product
  on(AssetActions.loadAssetSuccess, (state, action) => {
    return {
      ...state,
      selectedAsset: action.selectedAsset
    };
  }

  ),
  on(AssetActions.loadAssetFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),
  on(AssetActions.updateAsset,
    (state, action) => adapter.updateOne(action.asset, state)
  ),
  on(AssetActions.deleteAssetSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AssetActions.deleteAssetFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  )
);

export function reducer(state: AssetState | undefined, action: Action) {
  return assetReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
