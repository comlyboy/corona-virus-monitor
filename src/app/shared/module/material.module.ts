import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';



@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatRippleModule,
        MatBottomSheetModule
    ],
})


export class AngularMaterialModule { }
