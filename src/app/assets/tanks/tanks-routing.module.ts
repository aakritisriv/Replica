import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TankComponent } from './services/tank/tank.component';
import { TankListComponent } from './tank-list/tank-list.component';
import { HistoryComponent } from './history/history.component';
const routes: Routes = [
  { path: 'list/get/:id', component: TankComponent },
  { path: 'history', component: HistoryComponent },
 
  { path: 'list', component: TankListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TanksRoutingModule { }
