import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountryService } from './country.service';
import { ICountry } from '../interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countriesSub: Subscription;

  countries: ICountry[] = [];
  totalCountries: number = 0;
  statistic_taken_at: Date;


  constructor(
    public countryService: CountryService,
  ) { }


  onCountryDetails(countryName: string) {
    console.log(countryName)
    let countryDetails = this.countries.find(o => o.country_name === countryName);
    console.log(countryDetails)
  }

  initContents() {
    this.countryService.getCountries();
    this.countriesSub = this.countryService.getCountriesUpdateListener()
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
