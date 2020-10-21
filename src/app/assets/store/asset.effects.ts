import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, concatMap, switchMap } from 'rxjs/operators';
// import { ProductService } from '../services/product.service';
import { GlobalService } from '../services/global.service';
import * as fromAssetActions from './asset.actions';
import { of, EMPTY } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class AssetEffects {

  loadAssets$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromAssetActions.loadAssets),
    mergeMap(action =>
    this.assetService.getAssets().pipe(
        map(assets => fromAssetActions.loadAssetsSuccess({ assets  })),
        catchError(error =>
          of(fromAssetActions.loadAssetsFailure({ error}))
        )
      )
      )
    ),
  );
  loadAsset$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromAssetActions.loadAsset),
    mergeMap(action =>
    this.assetService.getAsset(action.id).pipe(
        map(asset => fromAssetActions.loadAssetSuccess({ selectedAsset: asset })),
        catchError(error =>
          of(fromAssetActions.loadAssetFailure({ error}))
        )
      )
      )
    ),
  );


  createProduct$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromAssetActions.addAsset),
    mergeMap(action =>
    this.assetService.createAsset(action.asset).pipe(
        map(asset => fromAssetActions.addAssetSuccess({ asset })),
        catchError(error =>
          of(fromAssetActions.addAssetFailure({ error}))
        )
      )
      ),
      tap(()=>this.router.navigate(['/asset/list']))
    ),
  );

  updateProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromAssetActions.updateAsset),
    concatMap((action) => this.assetService.editAsset(action.asset.id, action.asset.changes)),
    
  ),
 
  {dispatch: false}
);
 
  deleteProduct$ = createEffect(() =>
  this.actions$.pipe(
  ofType(fromAssetActions.deleteAsset),
    mergeMap(action =>
    this.assetService.deleteAsset(action.id).pipe(
        map(asset => fromAssetActions.deleteAssetSuccess({ id: action.id })),
        catchError(error =>
          of(fromAssetActions.deleteAssetFailure({ error}))
        )
      )
      ),
      tap(()=>this.router.navigate(['/asset/list']))
    ),
  );


  constructor(private actions$: Actions, private assetService: GlobalService, private router: Router) {}

}
