import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Subject } from 'rxjs';

import { ICountry } from '../../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  private API = environment;
  httpOptions = environment.httpOptions;

  private countries: ICountry[] = [];

  constructor(
    private http: HttpClient
  ) { }

  // =======================
  // get all customers belonging to all engineers

  private countriesDataUpdated = new Subject<{
    countries: ICountry[]
    taken_at: Date
  }>();

  getCountriesUpdateListener() {
    return this.countriesDataUpdated.asObservable();
  }

  getCountries() {
    this.http
      .get<{
        countries_stat: ICountry[];
        statistic_taken_at: Date
      }>(`${this.API.API_URL}coronavirus/cases_by_country.php`, this.httpOptions)
      .subscribe(countriesData => {
        this.countries = countriesData.countries_stat;
        this.countriesDataUpdated.next({
          countries: [...this.countries],
          taken_at: countriesData.statistic_taken_at
        });
      });
  };




  // ================
  private HistoricalDataUpdated = new Subject<{
    countries: ICountry[]
    taken_at: Date
  }>();

  getHistoricalDataUpdateListener() {
    return this.HistoricalDataUpdated.asObservable();
  }


  getHistoricalData() {
    this.http
      .get(`${this.API.API_URL2}historical`, this.httpOptions)
      .subscribe(HistoricalData => {
        // this.countries = countriesData.countries_stat;
        // this.countriesDataUpdated.next({
        //   countries: [...this.countries],
        //   taken_at: countriesData.statistic_taken_at
        // });
      });
  }


}
