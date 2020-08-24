import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ICountry } from '../interfaces/country';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {


  private API = environment;
  headers = environment;

  private countries: ICountry[] = [];

  // =======================
  // get all customers belonging to all engineers

  private countriesDataUpdated = new Subject<{
    countries: ICountry[]
    taken_at: Date
  }>();


  constructor(
    private http: HttpClient
  ) { }


  private countries2DataUpdated = new Subject<{
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
      }>(this.API.API_URL, this.headers.httpOptions)
      .subscribe(countriesData => {
        this.countries = countriesData.countries_stat;
        this.countriesDataUpdated.next({
          countries: [...this.countries],
          taken_at: countriesData.statistic_taken_at
        });
      });
  }

  getCountries2UpdateListener() {
    return this.countriesDataUpdated.asObservable();
  }

  getCountries2() {
    this.http
      .get(this.API.API_URL3)
      .subscribe(countriesData => {
        console.log(countriesData);
      });
  }




  // ================
  // private historicalDataUpdated = new Subject<IHistoricalData>();

  // getHistoricalDataUpdateListener() {
  //   return this.historicalDataUpdated.asObservable();
  // }


  // getHistoricalData(); {
  //   return this.http.get<IHistoricalData2[]>(`${this.API.API_URL2}historical`);
  // }


}
