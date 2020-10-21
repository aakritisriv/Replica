
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetComponent } from './asset/asset.component';
import { TankListComponent } from './tanks/tank-list/tank-list.component';


const routes: Routes = [
  { path: 'list/get/:id', component: AssetComponent },
 
 
  { path: 'list', component: AssetsListComponent },
  {path: 'list/tank/fetchtank/:id', component: TankListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {}
