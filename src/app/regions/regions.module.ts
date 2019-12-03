import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [RegionsComponent, RegionsListComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    MatListModule
  ]
})
export class RegionsModule { }
