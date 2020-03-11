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


  constructor(
    public countryService: CountryService,
  ) { }


  initContents() {
    this.countryService.getCountries();
    this.countriesSub = this.countryService.getCountriesUpdateListener()
      .subscribe((customersData: { countries: ICountry[], taken_at: Date }) => {
        this.countries = customersData.countries;
        this.statistic_taken_at = customersData.taken_at;
        this.totalCountries = this.countries.length;

        this.countries.forEach(d => {
          this.totalCases += d.cases;
          console.log(this.totalCases)
        });

      })

  }

  ngOnInit() {
    this.initContents();
  }

}
