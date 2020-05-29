import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ICountry } from '../../../interfaces/country';
import { CoronaService } from 'src/app/shared/service/corona.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  country: ICountry;

  totalCases = 0;
  totalCures = 0;
  totalDeaths = 0;

  deathRatePercentage = 0;

  isLoading = false;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: ICountry,
    private readonly coronaService: CoronaService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }


  initContents() {
    this.isLoading = true;
    this.country = this.data;

    const deaths = Number(this.country.deaths.replace(/\,/g, ''));
    const cases = Number(this.country.cases.replace(/\,/g, ''));
    this.deathRatePercentage = deaths / cases * 100;
    // this.transactionService.getTransactionDetails(this.transactionId)
    //   .subscribe(data => {
    //     this.country = data.transaction;

    //     this.changeDetectorRef.detectChanges();
    //   });
  }

  ngOnInit(): void {
    this.initContents();
  }

  ngOnDestroy(): void {
    this.country = null;

  }

}
