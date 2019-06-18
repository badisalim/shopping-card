import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { InvoiceFormComponent } from './shopping-card/invoice-form/invoice-form.component';
import { InvoiceContainerComponent } from './shopping-card/invoice-container/invoice-container.component';



const routes: Routes = [
  {
    path: 'shopping-card',
    component: ShoppingCardComponent
  },
  {
    path: 'invoice-form',
    component: InvoiceFormComponent
  },
  {
    path: 'invoice-container',
    component: InvoiceContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
