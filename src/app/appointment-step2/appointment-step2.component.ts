import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-appointment-step2',
  templateUrl: './appointment-step2.component.html',
  styleUrls: ['./appointment-step2.component.scss']
})
export class AppointmentStep2Component implements OnInit {
  message;
  disabled=true;
  constructor(private data: DataService) {}
  ngOnInit() {this.data.dateO.subscribe(message => this.message = message)}

  saveDate(event: MatDatepickerInputEvent<Date>){
    this.data.changeDate(event.value);
    console.log(event.value);
    this.disabled=false;
  }

}
