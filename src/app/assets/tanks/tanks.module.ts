import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TankAddComponent } from './tank-add/tank-add.component';
import { TankListComponent } from './tank-list/tank-list.component';
import { TankTrashComponent } from './tank-trash/tank-trash.component';
import { TankEditComponent } from './tank-edit/tank-edit.component';
import { TankComponent } from './services/tank/tank.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeviceDetectorService } from 'ngx-device-detector';
import { StoreTankCallsService } from './services/store-tank-calls.service';
import { StoreModule } from '@ngrx/store';
import * as fromTank from '../tanks/store/tank.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TankEffects } from './store/tank.effects';
import { TanksRoutingModule } from './tanks-routing.module';
import { TankService } from './services/tank.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { IntegersOnlyDirective } from 'src/app/directives/integers-only.directive';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [TankAddComponent, TankListComponent, TankTrashComponent, TankEditComponent, TankComponent, IntegersOnlyDirective, HistoryComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    TanksRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromTank.tanksFeatureKey, fromTank.reducer),
    EffectsModule.forFeature([TankEffects])],
  providers: [TankService, StoreTankCallsService,DeviceDetectorService],
  entryComponents: [TankTrashComponent, TankAddComponent, TankEditComponent],
  exports: [
    TankAddComponent, TankListComponent, TankTrashComponent, TankEditComponent, TankComponent,HistoryComponent 
  ]

})
export class TanksModule { }
