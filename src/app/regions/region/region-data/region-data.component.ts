import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-region-data',
  templateUrl: './region-data.component.html',
  styleUrls: ['./region-data.component.css']
})
export class RegionDataComponent implements OnInit {

  @Input() region;

  constructor() { }

  ngOnInit() {
  }

}
