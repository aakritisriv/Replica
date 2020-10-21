import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Tank } from '../models/tank';

// get list of Products actions below three
export const loadTanks = createAction(
  '[Tank List Component] Load Tanks'
);

export const loadTanksSuccess = createAction(
  '[Tank List Effect] Load Tank Success',
  props<{ tanks: Tank[] }>()
);

export const loadTanksFailure = createAction(
  '[Tank List Effect] Load Tanks Failure',
  props<{ error: any }>()
);

export const loadAssetTanks = createAction(
  '[Asset Tank List Component] Load Tanks',
  props<{ id: string }>()
);

export const loadAssetTanksSuccess = createAction(
  '[Asset Tank List Effect] Load Tank Success',
  props<{ selectedAssetTank: Tank[] }>()
);

export const loadAssetTanksFailure = createAction(
  '[Asset Tank List Effect] Load Tanks Failure',
  props<{ error: any }>()
);
// get individual product actions, below three
export const loadTank = createAction(
  '[Tank Components] Load Tank',
  props<{ id: string }>()
);

export const loadTankSuccess = createAction(
  '[Tank Effect] Load Tank Success',
  props<{ selectedTank: Tank }>()
);

export const loadTankFailure = createAction(
  '[Tank Effect] Load Tank Failure',
  props<{ error: any }>()
);

// Add Tank Action
export const addTank = createAction(
  '[Tank Add Component] Add Tank',
  props<{ tank: Tank }>()
);


export const addTankSuccess = createAction(
  '[Tank Add Effect] Add Tank Success',
  props<{ tank: Tank }>()
);


export const addTankFailure = createAction(
  '[Tank Add Effect] Add Tank Failure',
  props<{ error: any }>()
);

// Edit Component Action
export const updateTank = createAction(
  '[Tank Edit Component] Update Tank',
  props<{ tank: Update<Tank> }>()
);
export const updateTankSuccess = createAction(
  '[Tank Edit Component] Update Tank Success',
  props<{ tank: Tank }>()
);

export const updateTankFailure = createAction(
  '[Tank Edit Component] Update Tank Fail',
  props<{ error: Error | any }>()
);
// Delete Product Actions, below three
export const deleteTank = createAction(
  '[Tank Components] Delete Tank',
  props<{ id: string }>()
);

export const deleteTankSuccess = createAction(
  '[Tank Delete Effect] delete Tank Success',
  props<{ id: string }>()
);

export const deleteTankFailure = createAction(
  '[Tank Delete Tank] Delete Tank Failure',
  props<{ error: any }>()
);


