import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  handleSubmit(value) {
    console.log("YOU SUBMITTED!", this.testVal)
  }

  handleInput(event){
    this.testVal = event.target.value;

    console.log(this.test)
  }

  testVal = "fubar"

}
