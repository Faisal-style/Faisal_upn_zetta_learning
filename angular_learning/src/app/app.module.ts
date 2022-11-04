import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashierModule } from './cashier/cashier.module';
import { CashierComponent } from './cashier/cashier/cashier.component';
import { MenuComponent } from './cashier/menu/menu.component';
import { PaymentComponent } from './cashier/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CashierComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CashierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
