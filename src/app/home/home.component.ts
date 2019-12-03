import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  countries$: Observable<any[]>;

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {
    this.countries$ = this.countryService.getAllCountries();

  }

}
