import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  regions$: Observable<any[]>;
  lendingTypes$: Observable<any[]>;
  incomeLevels$: Observable<any[]>;
  countries$: Observable<any[]>;

  route = '/country';
  backRoute = '/search';
  amountOfCountries;



  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.regions$ = this.countryService.getAllRegions();
    this.lendingTypes$ = this.countryService.getAllLendingTypes$();
    this.incomeLevels$ = this.countryService.getAllIncomeLevels$();
    this.countryService.setBackRoute(this.backRoute);
  }

  onSearch(values) {
    this.countries$ = this.countryService.getCountriesBySearch$(values);
    this.amountOfCountries = values.nCountries;
  }

}
