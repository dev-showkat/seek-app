export interface CountryState {
    countries: CountryDetail[],
    country: CountryDetail | undefined,
    status: string,
    borders: {
        open: boolean,
        country: CountryDetail | undefined
    }
};

export interface CountryDetail {
    name: {
        common: string,
        nativeName: any
    },
    tld: string[],
    cca3: string,
    capital: string[],
    region: string,
    subregion: string,
    flags: {
        png: string
    },
    currencies: any,
    population: number,
    borders: string[]
}
