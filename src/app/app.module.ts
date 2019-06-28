import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { InvoiceFormComponent } from './shopping-card/invoice-form/invoice-form.component';
import { InvoiceContainerComponent } from './shopping-card/invoice-container/invoice-container.component';
import { RouterModule, Routes } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardComponent,
    InvoiceFormComponent,
    InvoiceContainerComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
