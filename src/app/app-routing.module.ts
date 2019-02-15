import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home/home.component';
import {AllProductsComponent} from './component/product/all-products/all-products.component';
import {SingleProductComponent} from './component/product/single-product/single-product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: AllProductsComponent
  },
  {
    path: 'single-product',
    component: SingleProductComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
