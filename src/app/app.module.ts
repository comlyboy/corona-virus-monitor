import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    // AvatarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      clockwise: false,
      titleFontSize: '30',
      unitsFontSize: '30',
      animationDuration: 300
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
