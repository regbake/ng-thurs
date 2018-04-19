import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  testVal = "fubar";
  imageData = {
    imageUrl: '',
    date: '',
    explanation: '',
    copyright: ''
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {

  }

  handleSubmit(value) {
    console.log("YOU SUBMITTED!", this.testVal);
    let apiKey = 'znnuLYP0IshD6hWh31CAnDd73rWlfiZyAArphHpw';

    this.http.get('https://api.nasa.gov/planetary/apod?date=' + this.testVal + '&api_key=' + apiKey)
      .subscribe(data => {
        console.log(data);

        this.imageData.imageUrl = data.url;
        this.imageData.date = data.date;
        this.imageData.explanation = data.explanation;
        this.imageData.copyright = data.copyright;

    });


  }

  handleInput(event){
    this.testVal = event.target.value;

    console.log(this.testVal)
  }
}
