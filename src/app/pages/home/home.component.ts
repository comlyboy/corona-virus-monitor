import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Color } from 'ng2-charts';

import { ICountry } from '../../interfaces/country';
import { CoronaService } from '../../shared/service/corona.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('lineChart', { static: false }) lineChart: { nativeElement: any; };
  line: any;

  viewMode = 'all';

  countriesSub: Subscription;

  totalCases = 0;
  totalCures = 0;
  totalDeaths = 0;
  totalCountries = 0;

  countryNames: string[] = [];
  recoversVisual: number[] = [];

  deathRatePercentage = 0;
  recoveryRatePercentage = 0;
  severeRatePercentage = 0;

  countries: ICountry[] = [];
  statistic_taken_at: Date;

  isLoading = false;

  recorvers: any[];

  // ==== Chart
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }], yAxes: [{}]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'start',
        color: '#fff',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColors: Color[] = [
    {
      backgroundColor: '#6e8be6'
    }
  ];
  public barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Transactions'
    }
  ];


  constructor(
    public coronaService: CoronaService,
  ) { }


  summaryDatas(countryArray: ICountry[]) {
    let allCases = 0;
    let deaths = 0;
    let cures = 0;
    let severe = 0;


    countryArray.forEach(d => {
      const convert = Number(d.cases.replace(/\,/g, ''));
      allCases += convert;
      // a.push(convert)
    });

    countryArray.forEach(d => {
      const convert1 = d.total_recovered.replace('N/A', '0');
      const convert2 = Number(convert1.replace(/\,/g, ''));
      cures += convert2;
    });

    countryArray.forEach(d => {
      const convert = Number(d.deaths.replace(/\,/g, ''));
      deaths += convert;
    });

    countryArray.forEach(d => {
      const convert1 = d.serious_critical.replace('N/A', '0');
      const convert = Number(convert1.replace(/\,/g, ''));
      severe += convert;
    });

    this.totalCases = allCases;
    this.totalCures = cures;
    this.totalDeaths = deaths;


    this.severeRatePercentage = severe / this.totalCases * 100;
    this.deathRatePercentage = this.totalDeaths / this.totalCases * 100;
    this.recoveryRatePercentage = this.totalCures / this.totalCases * 100;


    this.countryNames = countryArray.map((item) => item.country_name);
    // this.recoversVisual = a;
    this.recorvers = countryArray.map((item) => item.total_recovered);

  }


  initContents() {
    this.isLoading = true;
    this.coronaService.getCountries();
    // this.coronaService.getCountries2();
    this.countriesSub = this.coronaService.getCountriesUpdateListener()
      .subscribe((customersData: { countries: ICountry[], taken_at: Date }) => {
        this.countries = customersData.countries;
        this.statistic_taken_at = customersData.taken_at;
        this.totalCountries = this.countries.length;
        this.summaryDatas(this.countries);

        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.initContents();
  }

}
