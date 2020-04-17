// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  httpOptions: {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': 'fbf1b04851mshc7ae899ebcfdeacp110ecajsncb3dcc3a0692'
    })
  },
  httpOptions2: {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
      'x-rapidapi-key': 'fbf1b04851mshc7ae899ebcfdeacp110ecajsncb3dcc3a0692'
    })
  },
  API_URL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
  // API_URL2: 'https://corona.lmao.ninja/v2/'
  API_URL2: 'https://covid19-data.p.rapidapi.com/geojson-af'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
