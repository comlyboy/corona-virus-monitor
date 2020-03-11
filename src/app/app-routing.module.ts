import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  { path: 'dashboard', component: HomeComponent },
  
  { path: 'countries', component: CountryComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
