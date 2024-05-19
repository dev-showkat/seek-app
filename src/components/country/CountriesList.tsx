import { useEffect, useState } from 'react';
import Country from "./Country";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import SearchCountry from './SearchCountry';
import { fetchCountries } from '../../redux/slices/countrySlice';
import { CountryDetail } from '../../interfaces/country';
import { AppDispatch, RootState } from '../../redux/store';

export const CountriesList = () => {
    const [countriesList, setCountriesList] = useState<CountryDetail[]>([]);
    const { countries, status } = useSelector((state: RootState) => state.country);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        setCountriesList(countries)
    }, [countries]);

    useEffect(() => {
        if (!countries?.length) {
            dispatch(fetchCountries());
        }
    }, []);

    const findCountryByName = (countryName: string) => {
        if (countryName?.trim()) {
            const searchedCountries = countries.filter(({ name }) => name.common.toLowerCase().includes(countryName.toLowerCase()));
            setCountriesList(searchedCountries)
        } else {
            setCountriesList(countries)
        }
    }

    const findCountryByRegion = (countryRegion: string) => {
        if (countryRegion === 'selectRegion') {
            setCountriesList(countries)
        } else {
            const searchedCountries = countries.filter(({ region }) => region === countryRegion);
            setCountriesList(searchedCountries)
        }
    }

    return (
        <>
            <SearchCountry key={'searchBar'} findCountryByName={findCountryByName} findCountryByRegion={findCountryByRegion} />
            <Box sx={{ width: '100%', mt: 2 }}>
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {status === 'loading' ?
                        <Grid item sm={12} sx={{ textAlign: 'center' }}>
                            <CircularProgress disableShrink />
                        </Grid> :
                        countriesList.map((country, index) =>
                            <Grid item sm={12} md={3}>
                                <Country key={index} country={country} />
                            </Grid>)
                    }
                </Grid>
            </Box>
        </>
    );
};