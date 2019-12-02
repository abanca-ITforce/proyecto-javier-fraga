import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = 'https://api.worldbank.org/v2/country';
  finUrl = 'per_page=1000&format=json';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return(this.http.get<any[]>(this.url + '?' + this.finUrl)
    .pipe(map(data => (data[1])))

    );

  }

  getCountryById$(countryId) {
    return(this.http.get<any[]>(this.url + '/' + countryId + '?' + this.finUrl)
    .pipe(map(data => (data[1])),map(data => data[0]))

    );
  }
}
