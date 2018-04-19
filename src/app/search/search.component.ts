import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {

  }

  handleSubmit(value) {
    console.log("YOU SUBMITTED!", this.testVal);
    let apiKey = 'znnuLYP0IshD6hWh31CAnDd73rWlfiZyAArphHpw';

    this.http.get('https://api.nasa.gov/planetary/apod' + '?date=2017-06-20' + '&api_key=' + apiKey)
      .subscribe(data => {
        console.log(data);
    });
  }

  handleInput(event){
    this.testVal = event.target.value;

    console.log(this.testVal)
  }

  testVal = "fubar"

}
