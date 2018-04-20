import { Component, OnInit } from '@angular/core';

import { DayService } from '../day.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  dailyData = [];

  constructor(private dayService: DayService) { }

  ngOnInit() {
  }

}
