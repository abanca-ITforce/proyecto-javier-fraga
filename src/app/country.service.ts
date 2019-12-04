import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = 'https://api.worldbank.org/v2/';
  format = 'per_page=1000&format=json';
  backRoute;

  constructor(private http: HttpClient) { }

  getAllCountries() {

    const url = this.url + 'country?' + this.format;

    return(this.http.get<any[]>(url)
    .pipe(map(data => (data[1])))

    );

  }

  getCountryById$(countryId) {

    const url = this.url + 'country/' + countryId + '?' + this.format;

    return(this.http.get<any>(url)
    .pipe(map(data => (data[1][0])))
    );
  }

  getAllRegions() {
    const url = this.url + 'regions/?' + this.format;
    return(this.http.get<any[]>(url)
    .pipe(map(data => data[1]))
    );
  }

  getCountriesByRegionCode$(regionCode){
    const url = this.url + 'country?region=' + regionCode + '&' + this.format;
    return(this.http.get<any[]>(url)
    .pipe(map(data => data[1]))
    );
  }

  getRegionByCode$(regionCode) {
    const url = this.url + 'region/' + regionCode + '?' + this.format;

    return(this.http.get<any>(url)
    .pipe(map(data => (data[1][0])))
    );
  }

  getAllIncomeLevels$() {
    const url = this.url + 'incomeLevel' + '?' + this.format;
    return(this.http.get<any[]>(url)
    .pipe(map(data => data[1]))
    );
  }

  getAllLendingTypes$() {
    const url = this.url + 'lendingType' + '?' + this.format;
    console.log(url);
    return(this.http.get<any[]>(url)
    .pipe(map(data => data[1]))
    );
  }

  getCountriesBySearch$(values: any) {
    let url = this.url + 'country?';
    if (values.region !== '') {
      url += 'region=' + values.region;
    }
    if (values.incomeLevel !== '') {
      url += '&incomeLevel=' + values.incomeLevel;
    }
    if (values.lendingType !== '') {
      url += '&lendingType=' + values.lendingType;
    }
    url = url + '&' + this.format;
    console.log(url);
    return(this.http.get<any[]>(url)
    .pipe(map(data => data[1]))
    );
  }

  getBackRoute() {
    return this.backRoute;
  }

  setBackRoute(backRoute) {
    this.backRoute = backRoute;
  }

}
