import { Component, OnInit, Optional, Inject } from '@angular/core';
import { StoreAssetCallsService } from '../services/store-calls.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Asset } from './../models/asset';
import {MatDialog} from '@angular/material/dialog';
import { AssetEditComponent } from '../asset-edit/asset-edit.component';
import { AssetAddComponent } from '../asset-add/asset-add.component';
import { AssetTrashComponent } from '../asset-trash/asset-trash.component';
import { TankAddComponent } from '../tanks/tank-add/tank-add.component';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent implements OnInit {

  assets$: Observable<Asset[]>;
  count;
  constructor(
    private storeService: StoreAssetCallsService,
    public router: Router, private services:GlobalService,public dialog: MatDialog) {
     
    }

  ngOnInit() {
    this.storeService.storeCall();
    this.assets$ = this.storeService.loadAssets();
   
    this.storeService.loadAssets().subscribe((data)=>
    {
      this.count = data.length;
      
    })
  }
  opendelDialog(id){
    this.dialog.open(AssetTrashComponent, {
      width: '800px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { assetobj: id }
    }).afterClosed().subscribe((data)=>{
     
      if(data){
        this.storeService.storeCall();
        this.assets$ = this.storeService.loadAssets() 
      }
    })
    ;
  }
  openCreateTankDialog(assetId){
    this.dialog.open(TankAddComponent, {
      width: '800px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { assetobj: assetId }
    })
  }
  openDialog(asset) {
    this.dialog.open(AssetEditComponent, {
      width: '800px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { assetobj: asset }
    }).afterClosed().subscribe((data) => {
     
      if(data.data){
        this.storeService.storeCall();
        this.assets$ = this.storeService.loadAssets() 
    
      }
    })
    ;
   
  }
  openCreateDialog(){
    this.dialog.open(AssetAddComponent, {
      width: '450px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      
    });
  }

}
