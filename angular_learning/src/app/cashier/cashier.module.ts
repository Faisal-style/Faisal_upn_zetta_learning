import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierComponent } from './cashier/cashier.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    CashierComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CashierModule { }
