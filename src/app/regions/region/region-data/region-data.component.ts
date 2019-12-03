import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-region-data',
  templateUrl: './region-data.component.html',
  styleUrls: ['./region-data.component.css']
})
export class RegionDataComponent implements OnInit {

  @Input() region;
  idNotNull;
  constructor() { }

  ngOnInit() {
    if (this.region.id === '') {
      this.idNotNull = false;
    } else {
      this.idNotNull = true;
    }
  }

}
