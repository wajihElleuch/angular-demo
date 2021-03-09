import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {Home1Component} from './home1/home1.component';
import {Home2Component} from './home2/home2.component';
import {Home3Component} from './home3/home3.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, data: {user: 'wajih'}, children: [

      {path: '', redirectTo: 'home1', pathMatch: 'full'},
      {path: 'home1', component: Home1Component},
      {path: 'home2', component: Home2Component},
      {path: 'home3', component: Home3Component},
    ]
  },
  {path: 'product', component: ProductsComponent, data: {user: 'foued'}},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppComponentRoutingModule {
}
