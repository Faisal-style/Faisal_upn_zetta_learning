import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CashierModule { }
