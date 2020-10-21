
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TankState } from '../store/tank.reducer';
import { loadTank, updateTank, addTank,  loadAssetTanks} from '../store/tank.actions';
import * as fromTankActions from '../store/tank.actions';
import { selectedTank, selectTanks, selectedAssetTank } from '../store/tank.selecters';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StoreTankCallsService {

  constructor(private store: Store<TankState>, private router: Router) { }

  storeCall() {

    this.store.dispatch(fromTankActions.loadTanks());
   
   }
   
   
// This will fetch all tanks

  loadTanks() {
    
   return this.store.pipe(select(selectTanks));

  }
  storeTankCall(id){
    return this.store.dispatch(
      loadAssetTanks({id: id})
    );
   }
   loadAssetTanks() {
    
    return this.store.pipe(select(selectedAssetTank));
 
   }
loadSingleTank(id){
 return this.store.dispatch(
    loadTank({id: id})
  );
}


// This will fetch a single tank to the form fields

  loadSingleTankData(){
    return this.store.pipe(select(selectedTank))
  }

// Upload tank into store

  uploadSingleTank(data){
    
    this.store.dispatch(updateTank({tank: data}));
    
  }
// Add tank to store

addSingleProduct(data){
  this.store.dispatch(addTank({tank: data}));
}

// Delete tank from store  
  deleteTank(id: string) {
  
    return this.store.dispatch(fromTankActions.deleteTank({id}));
  }

 
}
