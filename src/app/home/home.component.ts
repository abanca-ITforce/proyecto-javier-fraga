import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    countries$ = this.countryService.getAllCountries();

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {
  }

}
