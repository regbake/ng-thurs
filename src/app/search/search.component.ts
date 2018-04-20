import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DayService } from '../day.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  testVal = "fubar";
  foo: string;
  
  imageData = {
    imageUrl: '',
    date: '',
    explanation: '',
    copyright: ''
  }

  constructor(private http: HttpClient, private dayService: DayService) { }

  ngOnInit() {

  }

  //submits data
  handleSubmit(value) {
      console.log("YOU SUBMITTED!", this.testVal);
      let apiKey = 'znnuLYP0IshD6hWh31CAnDd73rWlfiZyAArphHpw';

      // this.http.get('https://api.nasa.gov/planetary/apod?date=' + this.testVal + '&api_key=' + apiKey)
      //   .subscribe(data => {
      //     console.log(data);
      //
      //     this.imageData = {
      //       imageUrl: data.url,
      //       date: data.date,
      //       explanation: data.explanation,
      //       copyright: data.copyright
      //     }
      //
      // });

      this.dayService.addDay(this.testVal)
  }

  //binds the data
  handleInput(event){
    this.testVal = event.target.value;
  }
}
