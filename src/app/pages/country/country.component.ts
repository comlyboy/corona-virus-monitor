import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ICountry } from '../../interfaces/country';
import { CoronaService } from '../../shared/service/corona.service';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countriesSub: Subscription;

  country: ICountry;
  countries: ICountry[] = [];
  totalCountries = 0;

  statistic_taken_at: Date;

  totalCases = 0;
  totalCures = 0;
  totalDeaths = 0;

  deathRatePercentage = 0;

  isLoading = false;

  constructor(
    public readonly coronaService: CoronaService,
    public readonly modalService: ModalService
  ) { }


  onCountryDetails(countryName: string) {
    this.country = this.countries.find((item) => item.country_name === countryName);
    setTimeout(() => {
      this.modalService.openCountryDetailsSheet(this.country);
    }, 500);
  }


  initContents() {
    this.isLoading = true;
    this.coronaService.getCountries();
    this.countriesSub = this.coronaService.getCountriesUpdateListener()
      .subscribe((countriesData: { countries: ICountry[], taken_at: Date }) => {
        console.log(countriesData.countries)
        this.countries = countriesData.countries;
        this.statistic_taken_at = countriesData.taken_at;
        this.totalCountries = this.countries.length;
        this.isLoading = false;
      });

  }

  ngOnInit() {
    this.initContents();
  }


}
