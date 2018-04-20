import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DayService {
  dayTest = "Howdy from the service!";

  private day = new BehaviorSubject<string>('FOOBAR')
  cast = this.day.asObservable();

  constructor() { }

  dayArray = [];

  showDays(){
    console.log("day array: ", this.dayArray)
  }

  addDay(day) {
    console.log("I AM STUCK IN THE addDay() !!!");
    // this.showDays();
    this.dayArray.push(day)

    this.day.next(this.dayArray)

  }

}
