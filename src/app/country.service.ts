import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = 'https://api.worldbank.org/v2/country';

  constructor() { }

  getAllCountries() {

  }
}
