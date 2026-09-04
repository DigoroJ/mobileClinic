import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';



@NgModule({
  declarations: [
    AppointmentListComponent,
    AppointmentBookingComponent,
    AppointmentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentsModule { }
