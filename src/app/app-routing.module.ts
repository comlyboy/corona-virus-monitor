import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // { path: '', component: HomeComponent },

  { path: 'dashboard', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/country/country.module')
      .then(m => m.CountryModule)
  },

  // { path: 'countries', component: CountryComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
