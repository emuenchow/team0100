import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  objDate = Date.now();
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  private dateSource = new BehaviorSubject(this.objDate);
  dateO = this.dateSource.asObservable();

  constructor() { }

  changeMessage(message: number) {
    this.messageSource.next(message)
  }

  changeDate(date){
    this.dateSource.next(date)
  }

}
