import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})

export class CountriesListComponent implements OnInit {

  @Input() route;

  @Input() countries: any[];
  constructor() { }

  ngOnInit() {
  }

}
