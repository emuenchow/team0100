import { Component, OnInit } from '@angular/core';

import { Subscription }   from 'rxjs';
import { DataService } from "../data.service";


@Component({
  selector: 'app-appointment-step1',
  templateUrl: './appointment-step1.component.html',
  styleUrls: ['./appointment-step1.component.scss'],
})
export class AppointmentStep1Component implements OnInit {
  purposes: string[]=["STI testing", "UTI testing", "Prescription refill", "Immunization shots", "Primary Care", "Health clearance", "Other reason"];
  disabled = true;
  typed: string;
  medical = true;
  kind: string;
  subscription: Subscription;
  message: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  appointment(x: number): void{
    this.data.changeMessage(x);
    this.onSelect();
  }


  onSelect(): void{
    this.disabled = false;
  }
}
