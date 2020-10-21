import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { StoreAssetCallsService } from './services/store-calls.service';
import { StoreModule } from '@ngrx/store';
import * as fromAsset from '../assets/store/asset.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssetEffects } from './store/asset.effects';
import { AssetsRoutingModule } from './assets-routing.module';
import { GlobalService } from './services/global.service';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetComponent } from './asset/asset.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetTrashComponent } from './asset-trash/asset-trash.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TanksModule} from '../assets/tanks/tanks.module';

@NgModule({
  declarations: [
    
  AssetsListComponent,
    AssetComponent,
    AssetAddComponent,
    AssetEditComponent,
    AssetTrashComponent,
  ],
    
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    AssetsRoutingModule,
    TanksModule,
    FormsModule,
    StoreModule.forFeature(fromAsset.assetsFeatureKey, fromAsset.reducer),
    EffectsModule.forFeature([AssetEffects])],
  providers: [GlobalService, StoreAssetCallsService,DeviceDetectorService],
  entryComponents: [AssetTrashComponent, AssetAddComponent, AssetEditComponent],
  exports: [
    AssetsListComponent,
    AssetComponent,
    AssetAddComponent,
    AssetEditComponent,
    AssetTrashComponent,
    
   
  ]

})
export class AssetsModule {}


