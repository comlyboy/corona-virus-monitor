import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountryService } from '../country/country.service';
import { ICountry } from '../interfaces/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countriesSub: Subscription;

  totalCases: number = 0;



  countries: ICountry[] = [];
  totalCountries: number = 0;
  statistic_taken_at: Date;



  // bar-chart options
  country_cases_comparism: any[] = [];
  viewCharts: any[] = [1100, 250];
  barPadding = 5;
  barPaddingChart = 8;
  showDataLabel = true
  roundEdges = true;
  showXAxis = true;
  showYAxis = true;
  showBarLegend = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = '';
  colorScheme = {
    domain: [
      "#4a6ee0",
    ]
  };


  constructor(
    public countryService: CountryService,
  ) { }

  

  summaryDatas(countryArray: ICountry[]) {
    let allCases: number = 0;
    let deaths: number = 0;
    let heals: number = 0;

    countryArray.forEach(d => {
      let convert = Number(d.cases.replace(/\,/g, ''));
      allCases += convert
    });
    this.totalCases = allCases;
  }


  initContents() {

    this.countryService.getCountries();
    this.countriesSub = this.countryService.getCountriesUpdateListener()
      .subscribe((customersData: { countries: ICountry[], taken_at: Date }) => {
        this.countries = customersData.countries;
        this.statistic_taken_at = customersData.taken_at;
        this.totalCountries = this.countries.length;
        this.summaryDatas(this.countries)
      })

  }

  ngOnInit() {
    this.initContents();
  }

}
