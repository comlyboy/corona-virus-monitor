import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ICountry } from '../../../interfaces/country';
import { CountryComponent } from '../country.component';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  country = this.data;

  totalCases = 0;
  totalCures = 0;
  totalDeaths = 0;

  deathRatePercentage = 0;

  isLoading = false;

  constructor(
    private readonly bottomSheetRef: MatBottomSheetRef<CountryComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: ICountry,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  onCloseBottomSheet(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }




  initContents() {
    if (this.country) {
      const deaths = Number(this.country.deaths.replace(/\,/g, ''));
      const cases = Number(this.country.cases.replace(/\,/g, ''));
      this.deathRatePercentage = deaths / cases * 100;
    }
    this.changeDetectorRef.detectChanges();

  }

  ngOnInit(): void {
    this.initContents();
  }

  ngOnDestroy(): void {
    this.country = null;

  }

}
