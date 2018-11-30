import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
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
