import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnswerService }     from '../answer.service';
import { UserService} from '../user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AnswerService]
})
export class HomeComponent implements OnInit {
  kinds: string[]=["Medical", "Vision", "Dental","Behavioral Health"];
  constructor(){}
    //private answerService: AnswerService) {}
  ngOnInit() {}

  appointment(x: string): void{

    //this.answerService.updateKind(x);
  }

}
