import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCountries } from '../../services/country';
import { CountryDetail, CountryState } from '../../interfaces/country';
import { RootState } from '../store';

export const fetchCountries = createAsyncThunk<CountryDetail[], void, { state: RootState }>(
    'country/fetchCountries',
    async (_, { getState }) => {
        return await getCountries();
    });

const initialState: CountryState = {
    countries: [],
    country: undefined,
    status: 'idle',
    borders: {
        open: false,
        country: undefined
    }
};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        getCountry: (state, { payload }: { payload: string }) => {
            state.country = state.countries.find(country => country.name.common === payload);
        },
        setCountryBorder: (state, { payload }: { payload: string }) => {
            state.borders = {
                open: true,
                country: state.countries.find(country => country.cca3 === payload)
            }
        },
        closeCountryBorder: (state) => {
            state.borders = {
                open: false,
                country: undefined
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { getCountry, setCountryBorder, closeCountryBorder } = countrySlice.actions;

export default countrySlice.reducer;
