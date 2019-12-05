import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})

export class CountriesListComponent implements OnInit {
  @Input() route;

  @Input() countries: any[];

  @Input() amountOfCountries;

  arrayIsEmpty: boolean;

  constructor() {}

  ngOnInit() {
    if (this.countries.length === 0) {
      this.arrayIsEmpty = true;
    } else {
      this.arrayIsEmpty = false;
    }
    if (this.amountOfCountries != '') {
      if (this.amountOfCountries < this.countries.length) {
        this.countries.splice(
          this.amountOfCountries,
          this.countries.length - this.amountOfCountries
        );
      }
    }
  }
}
