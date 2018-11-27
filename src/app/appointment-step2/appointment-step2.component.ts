import { Component, OnInit } from '@angular/core';
import { AnswerService }     from '../answer.service';


@Component({
  selector: 'app-appointment-step2',
  templateUrl: './appointment-step2.component.html',
  styleUrls: ['./appointment-step2.component.scss'],
  providers: [AnswerService]
})
export class AppointmentStep2Component implements OnInit {
  week: number;
  disabled = true;
  within = false;
  constructor(private answerService: AnswerService) {}
  ngOnInit() {}

  appointment(x: number): void{
    this.answerService.updateWhen(x);
    if(x!=2){
      this.within=false;
      this.onSelect();
    }
  }
  setWeek(){
    if(this.within){
      this.answerService.updateWeeks(this.week);
    }
  }

  onSelect(): void{
    this.disabled = false;
  }

  weeks(): void{
    this.within = true;
    this.onSelect();
  }

}
