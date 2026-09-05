import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-confirmed',
  templateUrl: './appointment-confirmed.component.html',
  styleUrls: ['./appointment-confirmed.component.scss']
})
export class AppointmentConfirmedComponent {

  appointment;

  bookingReference = 'MC-2026-000145';

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {
    this.appointment =
      this.appointmentService.getAppointment();
  }

  goHome(): void {

    this.router.navigate([
      '/patient/dashboard'
    ]);

  }

}