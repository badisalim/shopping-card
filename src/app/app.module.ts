import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { InvoiceFormComponent } from './shopping-card/invoice-form/invoice-form.component';
import { InvoiceContainerComponent } from './shopping-card/invoice-container/invoice-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardComponent,
    InvoiceFormComponent,
    InvoiceContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
