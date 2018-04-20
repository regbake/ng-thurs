import { Component, OnInit } from '@angular/core';

import { DayService } from '../day.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  dailyData = ["1992-06-20", "1999-05-16"];

  constructor(private dayService: DayService) { }

  ngOnInit() {
    this.dayService.cast.subscribe(day =>

      for (let i=0; i<day.length; i++){
        this.dailyData.push(day[i]);
      }

      console.log("FROM ARCHIVE: ", this.dailyData)
    );

  }

}
