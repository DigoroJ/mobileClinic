import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { PatientLayoutComponent } from './core/layout/patient-layout/patient-layout.component';
import { AdminDashboardComponent } from './features/dashboard/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './features/patient/patient-dashboard/patient-dashboard.component';
import { BookAppointmentComponent } from './features/patient/book-appointment/book-appointment.component';
import { SelectDoctorComponent } from './features/patient/select-doctor/select-doctor.component';
import { AppointmentDateTimeComponent } from './features/patient/appointment-date-time/appointment-date-time.component';
import { ReviewAppointmentComponent } from './features/patient/appointment-review/appointment-review.component';
import { AppointmentConfirmedComponent } from './features/patient/appointment-confirmed/appointment-confirmed.component';



const routes: Routes = [

  // =====================================================
  // DEFAULT
  // =====================================================

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },


  // =====================================================
  // ADMIN APPLICATION
  // =====================================================

  {
    path: '',
    component: MainLayoutComponent,

    children: [

      {
        path: 'dashboard',
        component: AdminDashboardComponent
      }

    ]
  },


  // =====================================================
  // PATIENT APPLICATION
  // =====================================================

  {
  path: 'patient',
  component: PatientLayoutComponent,

  children: [

    {
      path: 'dashboard',
      component: PatientDashboardComponent
    },

    {
      path: 'book-appointment',
      component: BookAppointmentComponent
    },

    {
      path: 'select-doctor',
      component: SelectDoctorComponent
    },

    {
      path: 'appointment-date-time',
      component: AppointmentDateTimeComponent
    },

    {
      path: 'appointment-review',
      component: ReviewAppointmentComponent
    },

    {
      path: 'appointment-confirmed',
      component: AppointmentConfirmedComponent
    }

  ]
}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}