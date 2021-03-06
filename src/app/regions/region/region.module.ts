import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { RegionDataComponent } from './region-data/region-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [RegionComponent, RegionDataComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule
  ]
})
export class RegionModule { }
