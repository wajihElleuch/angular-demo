import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {AdditionComponent} from './addition/addition.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubStringPipe} from './pipes/sub-string.pipe';
import {BorderColorDirective} from './directives/border-color.directive';
import {RectiveFormComponent} from './rective-form/rective-form.component';
import { CounterComponent } from './counter/counter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {AppComponentRoutingModule} from './app-component-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AdditionComponent,
    SubStringPipe,
    BorderColorDirective,
    RectiveFormComponent,
    CounterComponent,
    NavbarComponent,
    PanelComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailsComponent,
    Home1Component,
    Home2Component,
    Home3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    AppComponentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
