import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = 'https://api.worldbank.org/v2/';
  format = 'per_page=1000&format=json';

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

  getRegionCountriesByCode$(regionCode){
    const url = this.url + 'country?region=' + regionCode + '&' + this.format;
    console.log(url);
    return(this.http.get<any[]>(url)
    .pipe(map(data => data[1]))
    );
  }

  getRegionByCode$(regionCode){
    const url = this.url + 'region/' + regionCode + '?' + this.format;

    return(this.http.get<any>(url)
    .pipe(map(data => (data[1][0])))
    );
  }
}
