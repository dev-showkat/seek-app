import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CountryDetail } from "../../interfaces/country";

export default function CountryData({ country }: { country: CountryDetail }) {
  return (
    <Grid container rowSpacing={4} spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography gutterBottom component="div" sx={{ fontWeight: "bolder" }}>
          {country.name.common}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item sx={{ display: "flex" }} md={12}>
          <Typography variant="body2">Native Name : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {
              country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                .common
            }
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }} sm={12}>
          <Typography variant="body2">Population : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {country.population}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }} sm={12}>
          <Typography variant="body2">Region : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {country.region}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }} sm={12}>
          <Typography variant="body2">Sub Region : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {country.subregion}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }} sm={12}>
          <Typography variant="body2">Capital : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {country.capital}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item sx={{ display: "flex" }}>
          <Typography variant="body2">Top Level Domain : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {country.tld}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography variant="body2">Curriencies : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {" "}
            {country.currencies[Object.keys(country.currencies)[0]].name}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography variant="body2">Languages : </Typography>
          <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">
            {country.region}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
