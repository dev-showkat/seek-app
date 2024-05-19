import axios from 'axios';
import { CountryDetail } from '../interfaces/country';

export const getCountries = async (): Promise<CountryDetail[]> => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
}