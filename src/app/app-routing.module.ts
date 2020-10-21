import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AssetsListComponent } from './assets/assets-list/assets-list.component';

const routes: Routes = [
  { path: '',redirectTo: 'asset/list', pathMatch:'full' },
  {
    path: 'product',
    loadChildren: '../app/products/products.module#ProductsModule'
  },
  {
    path: 'asset',
    loadChildren: '../app/assets/assets.module#AssetsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
