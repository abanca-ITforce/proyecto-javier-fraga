import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CountriesListComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ],
  exports: [CountriesListComponent]
})
export class SharedModule { }
