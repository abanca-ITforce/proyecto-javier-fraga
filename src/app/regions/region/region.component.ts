import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region$: Observable<any>;
  regionCountries$: Observable<any[]>;
  route = '../../../country';

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    const regionCode = this.activatedRoute.snapshot.params.regionCode;
    this.regionCountries$ = this.countryService.getCountriesByRegionCode$(regionCode);
    this.region$ = this.countryService.getRegionByCode$(regionCode);
    this.countryService.setBackRoute('../../regions/' + regionCode);

  }
}
