import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CountryListComponent } from './country-list/country-list.component';
import { MatNavList, MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [HomeComponent, CountryListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule,
    MatNavList,
  ]
})
export class HomeModule { }
