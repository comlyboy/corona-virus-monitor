import { NgModule } from '@angular/core';

// Material
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({

    // imports: [
    //     // Materials
    //     MatInputModule,
    //     MatToolbarModule,
    //     MatButtonModule,
    //     MatSidenavModule,
    //     MatIconModule,
    //     MatMenuModule,
    //     MatSnackBarModule,
    //     MatPaginatorModule,
    //     MatFormFieldModule,
    //     MatTooltipModule,
    //     ScrollingModule,
    //     MatButtonToggleModule,
    //     MatRippleModule,
    //     MatTabsModule,
    //     MatProgressBarModule,
    //     MatAutocompleteModule,
    //     MatStepperModule,
    //     MatRadioModule
    // ],
    exports: [
        // Materials
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatTooltipModule,
        ScrollingModule,
        MatButtonToggleModule,
        MatRippleModule,
        MatTabsModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatStepperModule,
        MatRadioModule,
        MatBadgeModule,
        MatCheckboxModule
    ],
})


export class AngularMaterialModule { }
