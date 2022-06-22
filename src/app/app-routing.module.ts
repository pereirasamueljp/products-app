import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    // canActivate: [AuthGuard],
    path: '',
    loadChildren: () => import('./pages/products/products.module').then(x => x.ProductsModule)
  },
  {
    // canActivate: [AuthGuard,],
    path: 'product',
    loadChildren: () => import('./pages/view/view.module').then(x => x.ViewModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
