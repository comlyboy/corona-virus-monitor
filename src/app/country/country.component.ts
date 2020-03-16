import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ICountry } from '../interfaces/country';
import { CoronaService } from '../shared/corona.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countriesSub: Subscription;

  country: ICountry;
  countries: ICountry[] = [];
  totalCountries: number = 0;
  statistic_taken_at: Date;

  totalCases: number = 0;
  totalCures: number = 0;
  totalDeaths: number = 0;

  deathRatePercentage: number = 0;

  constructor(
    public coronaService: CoronaService,
  ) { }


  onCountryDetails(countryName: string) {
    this.country = this.countries.find(o => o.country_name === countryName);

    let deaths = Number(this.country.deaths.replace(/\,/g, ''));
    let cases = Number(this.country.cases.replace(/\,/g, ''));
    this.deathRatePercentage = deaths / cases * 100;
  }

  initContents() {
    this.coronaService.getCountries();
    this.countriesSub = this.coronaService.getCountriesUpdateListener()
      .subscribe((customersData: { countries: ICountry[], taken_at: Date }) => {
        this.countries = customersData.countries;
        this.statistic_taken_at = customersData.taken_at;
        this.totalCountries = this.countries.length;
      })

  }

  ngOnInit() {
    this.initContents();
  }

}
