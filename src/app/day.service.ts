import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DayService {
  dayTest = "Howdy from the service!";

  constructor() { }

}
