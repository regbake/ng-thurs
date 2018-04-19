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

    this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
