import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashierModule } from './cashier/cashier.module';
import { MenuComponent } from './cashier/menu/menu.component';
import { PaymentComponent } from './cashier/payment/payment.component';
import { CashierRoutingModule } from './cashier/cashier-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CashierRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
