import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AssetState } from '../store/asset.reducer';
import { loadAsset, updateAsset, addAsset } from '../store/asset.actions';
import * as fromAssetActions from '../store/asset.actions';
import { selectedAsset, selectAssets } from '../store/asset.selecters';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreAssetCallsService {

  constructor(private store: Store<AssetState>, private router: Router) { }

  storeCall() {

    this.store.dispatch(fromAssetActions.loadAssets());
   
   }
// This will fetch all assets

  loadAssets() {
    
   return this.store.pipe(select(selectAssets));

  }
// this will fetch the single asset from the store

loadSingleAsset(id){
 return this.store.dispatch(
    loadAsset({id: id})
  );
}


// This will fetch a single asset to the form fields

  loadSingleAssetData(){
    return this.store.pipe(select(selectedAsset))
  }

// Upload asset into store

  uploadSingleAsset(data){
    
    this.store.dispatch(updateAsset({asset: data}));
    
  }
// Add asset to store

addSingleAsset(data){
  this.store.dispatch(addAsset({asset: data}));
}

// Delete asset from store  
  deleteAsset(id: string) {
  
    return this.store.dispatch(fromAssetActions.deleteAsset({id}));
  }
}
