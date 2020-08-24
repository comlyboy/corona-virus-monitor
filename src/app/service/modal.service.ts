import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { CountryDetailsComponent } from 'src/app/pages/country/country-details/country-details.component';
import { ICountry } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private readonly bottomSheet: MatBottomSheet) { }

  openCountryDetailsSheet(country: ICountry): void {
    this.bottomSheet.open(CountryDetailsComponent, {
      data: country
    });
  }

}
