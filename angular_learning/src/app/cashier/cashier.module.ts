import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { CashierComponent } from './cashier/cashier.component';
import { CashierRoutingModule } from './cashier-routing.module';

@NgModule({
  declarations: [CashierComponent, MenuComponent, PaymentComponent],
  imports: [CommonModule, CashierRoutingModule],
})
export class CashierModule {}
