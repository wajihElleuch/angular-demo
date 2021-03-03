import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AdditionComponent } from './addition/addition.component';
import {FormsModule} from '@angular/forms';
import { SubStringPipe } from './pipes/sub-string.pipe';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AdditionComponent,
    SubStringPipe,
    BorderColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
