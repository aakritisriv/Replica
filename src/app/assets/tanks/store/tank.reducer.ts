import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tank } from '../models/tank';
import * as TankActions from './tank.actions';

export const tanksFeatureKey = 'tanks';

export interface TankState extends EntityState<Tank> {
  // additional entities state properties
  error: any;
  selectedTank: Tank;
  selectedAssetTank: Tank[];
}

export const adapter: EntityAdapter<Tank> = createEntityAdapter<Tank>();

export const initialState: TankState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedTank: undefined,
 selectedAssetTank: undefined
});

const tankReducer = createReducer(
  initialState,

  // For create Tank
  on(TankActions.addTankSuccess,
    (state, action) => adapter.addOne(action.tank, state)
  ),
  on(TankActions.addTankFailure,
    (state, action) => {
       return {
         ...state,
         error: action.error
       };
    }
  ),

  // For Get all Tank
  on(TankActions.loadTanksSuccess, (state, action) =>
    adapter.addAll(action.tanks, state)
  ),
  on(TankActions.loadTanksFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),
  on(TankActions.loadAssetTanksSuccess, (state, action) => {
    return {
      ...state,
      selectedAssetTank: action.selectedAssetTank
    };
  }

  ),
  on(TankActions.loadAssetTanksFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),
  // For Get individual product
  on(TankActions.loadTankSuccess, (state, action) => {
    return {
      ...state,
      selectedTank: action.selectedTank
    };
  }

  ),
  on(TankActions.loadTankFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),
  on(TankActions.updateTank,
    (state, action) => adapter.updateOne(action.tank, state)
  ),
  on(TankActions.deleteTankSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TankActions.deleteTankFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  )
);

export function reducer(state: TankState | undefined, action: Action) {
  return tankReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
