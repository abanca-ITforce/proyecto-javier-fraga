import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

export class CountryListComponent implements OnInit {

  @Input() countries: any[];

  constructor() { }

  ngOnInit() {
  }

}
