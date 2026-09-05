import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { PatientDashboardComponent } from './features/patient/patient-dashboard/patient-dashboard.component';
import { BookAppointmentComponent } from './features/patient/book-appointment/book-appointment.component';
import { SelectDoctorComponent } from './features/patient/select-doctor/select-doctor.component';
import { PatientLayoutComponent } from './core/layout/patient-layout/patient-layout.component';
import { AppointmentDateTimeComponent } from './features/patient/appointment-date-time/appointment-date-time.component';
import { ReviewAppointmentComponent } from './features/patient/appointment-review/appointment-review.component';
import { AppointmentConfirmedComponent } from './features/patient/appointment-confirmed/appointment-confirmed.component';
import { AppointmentProgressComponent } from './features/patient/appointment-progress/appointment-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PatientDashboardComponent,
    BookAppointmentComponent,
    SelectDoctorComponent,
    PatientLayoutComponent,
    AppointmentDateTimeComponent,
    ReviewAppointmentComponent,
    AppointmentConfirmedComponent,
    AppointmentProgressComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}