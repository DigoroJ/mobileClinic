import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';



@NgModule({
  declarations: [
    PatientListComponent,
    PatientRegistrationComponent,
    PatientDetailsComponent,
    PatientHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientsModule { }
