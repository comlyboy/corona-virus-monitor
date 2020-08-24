import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { AngularMaterialModule } from '../../shared/module/material.module';
import { SpinnerModule } from 'src/app/interfaces/components/spinner/spinner.module';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    AngularMaterialModule,
    NgxChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      clockwise: false,
      titleFontSize: '35',
      unitsFontSize: '30',
      animationDuration: 300
    }),
    SpinnerModule
  ]
})
export class CountryModule { }
