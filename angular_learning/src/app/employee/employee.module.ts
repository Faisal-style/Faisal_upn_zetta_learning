import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityComponent } from './availability/availability.component';
import { DetailComponent } from './detail/detail.component';
import { PresenceRecorderComponent } from './presence-recorder/presence-recorder.component';



@NgModule({
  declarations: [
    AvailabilityComponent,
    DetailComponent,
    PresenceRecorderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
