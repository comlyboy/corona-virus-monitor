import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { Chart } from 'chart.js';

import { ICountry } from '../interfaces/country';
import { CoronaService } from '../shared/service/corona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('lineChart', { static: false }) lineChart: { nativeElement: any; };
  line: any;

  countriesSub: Subscription;

  totalCases: number = 0;
  totalCures: number = 0;
  totalDeaths: number = 0;
  totalCountries: number = 0;

  countryNames: string[] = [];
  recoversVisual: number[] = [];

  deathRatePercentage: number = 0;
  recoveryRatePercentage: number = 0;
  severeRatePercentage: number = 0;

  countries: ICountry[] = [];
  statistic_taken_at: Date;

  isLoading: boolean = false;


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
    public coronaService: CoronaService,
  ) { }

  renderChart() {
    const charrt = this.lineChart.nativeElement;
    charrt.height = 200
    this.line = new Chart(charrt, {
      type: 'bar',
      data: {
        labels: this.countryNames,
        datasets: [{
          // label: 'Recovered',
          label: 'Cases',
          data: this.recoversVisual,
          backgroundColor: '#12b886',
          borderColor: '#12b886',
          borderWidth: 1,
          fill: false
        },
          // {
          //   label: 'Dead',
          //   data: this.deadVisual,
          //   backgroundColor: '#dc3545',
          //   borderColor: '#dc3545',
          //   borderWidth: 1,
          //   fill: false
          // },
          // {
          //   label: 'Severe',
          //   data: this.severe,
          //   backgroundColor: '#ffc107',
          //   borderColor: '#ffc107',
          //   borderWidth: 1,
          //   fill: false
          // }
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }




  summaryDatas(countryArray: ICountry[]) {
    let allCases: number = 0;
    let deaths: number = 0;
    let cures: number = 0;
    let severe: number = 0;

    countryArray.forEach(d => {
      let convert = Number(d.cases.replace(/\,/g, ''));
      allCases += convert
      // a.push(convert)
    });

    countryArray.forEach(d => {
      let convert = Number(d.total_recovered.replace(/\,/g, ''));
      cures += convert
    });

    countryArray.forEach(d => {
      let convert = Number(d.deaths.replace(/\,/g, ''));
      deaths += convert
    });

    countryArray.forEach(d => {
      let convert = Number(d.serious_critical.replace(/\,/g, ''));
      severe += convert
    });

    this.totalCases = allCases;
    this.totalCures = cures
    this.totalDeaths = deaths


    this.severeRatePercentage = severe / this.totalCases * 100;
    this.deathRatePercentage = this.totalDeaths / this.totalCases * 100;
    this.recoveryRatePercentage = this.totalCures / this.totalCases * 100;


    // this.countryNames = countryArray.map((item) => item.country_name);
    // this.recoversVisual = a;
    // this.recorvers = countryArray.map((item) => item.total_recovered);

  }


  initContents() {
    this.isLoading = true;
    this.coronaService.getCountries();
    this.countriesSub = this.coronaService.getCountriesUpdateListener()
      .subscribe((customersData: { countries: ICountry[], taken_at: Date }) => {
        this.countries = customersData.countries;
        this.statistic_taken_at = customersData.taken_at;
        this.totalCountries = this.countries.length;
        this.summaryDatas(this.countries)
        // setTimeout(() => {
        //   this.renderChart();
        // }, 1000);
        this.isLoading = false;

      })

  }

  ngOnInit() {
    this.initContents();
  }

}
