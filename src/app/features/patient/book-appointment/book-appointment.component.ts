import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {

  selectedService = '';

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  selectService(service: string): void {
    this.selectedService = service;

    this.appointmentService.setService(service);
  }

  continue(): void {

    if (!this.selectedService) {
      return;
    }

    this.router.navigate([
      '/patient/select-doctor'
    ]);

  }

}