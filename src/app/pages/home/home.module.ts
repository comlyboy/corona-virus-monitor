import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      clockwise: false,
      titleFontSize: '35',
      unitsFontSize: '30',
      animationDuration: 300
    }),
    ChartsModule,
    SpinnerModule
  ]
})
export class HomeModule { }
