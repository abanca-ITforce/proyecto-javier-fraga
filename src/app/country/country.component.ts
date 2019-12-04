import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country$: Observable<any>;
  backRoute;

  constructor(private activatedRoute: ActivatedRoute,private countryService: CountryService) {
    const countryId = activatedRoute.snapshot.params.id;
    this.country$ = countryService.getCountryById$(countryId);
  }

  ngOnInit() {
    this.backRoute = this.countryService.getBackRoute();
  }

}
