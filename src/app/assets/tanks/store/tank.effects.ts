import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, concatMap, switchMap } from 'rxjs/operators';
// import { ProductService } from '../services/product.service';
import { TankService } from '../services/tank.service';
import * as fromTankActions from './tank.actions';
import { of, EMPTY } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class TankEffects {

  loadTanks$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromTankActions.loadTanks),
    mergeMap(action =>
    this.tankService.getTanks().pipe(
        map(tanks => fromTankActions.loadTanksSuccess({ tanks  })),
        catchError(error =>
          of(fromTankActions.loadTanksFailure({ error}))
        )
      )
      )
    ),
  );
  loadAssetTanks$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromTankActions.loadAssetTanks),
    mergeMap(action =>
    this.tankService.getAssetTanks(action.id).pipe(
        map(selectedAssetTank => fromTankActions.loadAssetTanksSuccess({ selectedAssetTank  })),
        catchError(error =>
          of(fromTankActions.loadAssetTanksFailure({ error}))
        )
      )
      )
    ),
  );
  
  loadTank$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromTankActions.loadTank),
    mergeMap(action =>
    this.tankService.getTank(action.id).pipe(
        map(tank => fromTankActions.loadTankSuccess({ selectedTank: tank })),
        catchError(error =>
          of(fromTankActions.loadTankFailure({ error}))
        )
      )
      )
    ),
  );


  createTank$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromTankActions.addTank),
    mergeMap(action =>
    this.tankService.createTank(action.tank).pipe(
        map(tank => fromTankActions.addTankSuccess({ tank })),
        catchError(error =>
          of(fromTankActions.addTankFailure({ error}))
        )
      )
      ),
      tap(()=>this.router.navigate(['/asset/tank/history/']))
    ),
  );

  updateProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromTankActions.updateTank),
    concatMap((action) => this.tankService.editTank(action.tank.id, action.tank.changes)),
    
  ),
 
  {dispatch: false}
);
 
  deleteProduct$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromTankActions.deleteTank),
    mergeMap(action =>
    this.tankService.deleteTank(action.id).pipe(
        map(tank => fromTankActions.deleteTankSuccess({ id: action.id })),
        catchError(error =>
          of(fromTankActions.deleteTankFailure({ error}))
        )
      )
      ),
      
    ),
  );


  constructor(private actions$: Actions, private tankService: TankService, private router: Router) {}

}
