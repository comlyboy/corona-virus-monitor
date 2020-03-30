import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'dashboard', redirectTo: '', pathMatch: 'full' },

  { path: 'countries', component: CountryComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
