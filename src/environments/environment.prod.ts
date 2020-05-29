import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
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
  API_URL2: 'https://covid19-data.p.rapidapi.com/geojson-af',
  API_URL3: 'https://disease.sh/v2/historical/all?lastdays=all'
};
