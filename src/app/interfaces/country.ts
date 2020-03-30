export interface ICountry {
    country_name: string;
    cases: any;
    deaths: any;
    region: number;
    total_recovered: any;
    new_deaths: number;
    new_cases: number;
    serious_critical: any;
}

export interface IHistoricalData {
    country: string,
    province: string,
    updatedAt: string,
    stats: {
        confirmed: number,
        deaths: number,
        recovered: number
    },
    coordinates: {
        latitude: number,
        longitude: number
    }
}

export interface IHistoricalData {
    country: string,
    province: string,
    timeline: {
        cases: {},
        deaths: {},
        recovered: {}
    }
}