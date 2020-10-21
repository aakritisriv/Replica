import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Asset } from '../models/asset';

// get list of Products actions below three
export const loadAssets = createAction(
  '[Asset List Component] Load Assets'
);

export const loadAssetsSuccess = createAction(
  '[Asset List Effect] Load Asset Success',
  props<{ assets: Asset[] }>()
);

export const loadAssetsFailure = createAction(
  '[Asset List Effect] Load Assets Failure',
  props<{ error: any }>()
);

// get individual product actions, below three
export const loadAsset = createAction(
  '[Asset Components] Load Asset',
  props<{ id: string }>()
);

export const loadAssetSuccess = createAction(
  '[Asset Effect] Load Asset Success',
  props<{ selectedAsset: Asset }>()
);

export const loadAssetFailure = createAction(
  '[Asset Effect] Load Asset Failure',
  props<{ error: any }>()
);

// Add Asset Action
export const addAsset = createAction(
  '[Asset Add Component] Add Asset',
  props<{ asset: Asset }>()
);


export const addAssetSuccess = createAction(
  '[Asset Add Effect] Add Asset Success',
  props<{ asset: Asset }>()
);


export const addAssetFailure = createAction(
  '[Asset Add Effect] Add Asset Failure',
  props<{ error: any }>()
);

// Edit Component Action
export const updateAsset = createAction(
  '[Asset Edit Component] Update Asset',
  props<{ asset: Update<Asset> }>()
);
export const updateAssetSuccess = createAction(
  '[Asset Edit Component] Update Asset Success',
  props<{ asset: Asset }>()
);

export const updateAssetFailure = createAction(
  '[Asset Edit Component] Update Asset Fail',
  props<{ error: Error | any }>()
);
// Delete Product Actions, below three
export const deleteAsset = createAction(
  '[Asset Components] Delete Asset',
  props<{ id: string }>()
);

export const deleteAssetSuccess = createAction(
  '[Asset Delete Effect] delete Asset Success',
  props<{ id: string }>()
);

export const deleteAssetFailure = createAction(
  '[Product Delete Asset] Delete Asset Failure',
  props<{ error: any }>()
);


