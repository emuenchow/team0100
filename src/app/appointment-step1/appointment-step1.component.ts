import { Component, OnInit } from '@angular/core';
import { AnswerService }     from '../answer.service';
import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-appointment-step1',
  templateUrl: './appointment-step1.component.html',
  styleUrls: ['./appointment-step1.component.scss']
})
export class AppointmentStep1Component implements OnInit {
  purposes: string[]=["STI testing", "UTI testing", "Prescription refill", "Immunization shots", "Primary Care", "Health clearance", "Other reason"];
  disabled = true;
  typed: string;
  medical = false;
  subscription: Subscription;
  constructor(private answerService: AnswerService) {
  }
  ngOnInit() {
    this.answerService.kind$.subscribe(x => {
      this.medical = (x === "Medical");
    });
  }

  appointment(x: string): void{
    this.answerService.updatePurpose(x);
    onSelect();
  }

  appointment_(): void{
    this.answerService.updatePurpose(this.typed);
  }

  onSelect(): void{
    this.disabled = false;
  }
}
