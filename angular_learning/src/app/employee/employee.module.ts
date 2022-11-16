import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [EmployeeComponent, DetailComponent],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
