import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class CountryModule { }
