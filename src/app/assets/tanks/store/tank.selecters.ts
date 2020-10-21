import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TankState, tanksFeatureKey, selectAll } from './tank.reducer';

// This is the slice we want to grab
export const selectTankState = createFeatureSelector<TankState>(
    tanksFeatureKey
);

export const selectTanks = createSelector(selectTankState, selectAll);

export const selectedTank = createSelector(
    selectTankState,
    (state: TankState) => state.selectedTank
    );
export const selectedAssetTank   = createSelector(selectTankState,(state: TankState) => state.selectedAssetTank)