import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/country/CountriesList';
import CountryDetails from './components/country/CountryDetail';

function App() {
  const { theme } = useSelector((state: { theme: { theme: any } }) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:name" element={<CountryDetails />} />
      </Routes>
    </ThemeProvider >
  );
}

export default App;
