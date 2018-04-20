import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DayService {
  dayTest = "Howdy from the service!";

  private day = new BehaviorSubject<string>('FOOBAR')
  cast = this.day.asObservable();

  constructor() { }

  addDay(day) {
    console.log("I AM STUCK IN THE addDay() !!!");
    
    this.day.next(day)

  }

}
