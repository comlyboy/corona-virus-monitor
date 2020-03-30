import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  httpOptions: {
    headers: new HttpHeaders({
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "fbf1b04851mshc7ae899ebcfdeacp110ecajsncb3dcc3a0692"
    })
  },
  API_URL: 'https://coronavirus-monitor.p.rapidapi.com/',
  API_URL2: 'https://corona.lmao.ninja/v2/'
};
