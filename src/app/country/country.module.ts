import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CountryCardComponent } from './country-card/country-card.component';


@NgModule({
  declarations: [CountryComponent, CountryCardComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CountryModule { }
