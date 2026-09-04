import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ClinicDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
