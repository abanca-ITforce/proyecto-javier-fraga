import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions$: Observable<any[]>;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.regions$ = this.countryService.getAllRegions();
  }

}
