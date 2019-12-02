import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country$;

  constructor(activatedRoute: ActivatedRoute, countryService: CountryService) {
    const countryId = activatedRoute.snapshot.params.id;
    this.country$ = countryService.getCountryById$(countryId);

  }

  ngOnInit() {
  }

}
