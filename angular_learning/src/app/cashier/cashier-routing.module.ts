import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierModule } from './cashier.module';
import { CashierComponent } from './cashier/cashier.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CashierComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierRoutingModule {}
