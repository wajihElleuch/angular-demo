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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
