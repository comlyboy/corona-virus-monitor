import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    NgxChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      clockwise: false,
      titleFontSize: '35',
      unitsFontSize: '30',
      animationDuration: 300
    }),
  ]
})
export class CountryDetailsModule { }
