import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchCountries,
  getCountry,
  setCountryBorder,
  closeCountryBorder,
} from "../../redux/slices/countrySlice";
import CountryData from "./CountryData";
import { Card, CardActions, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CountryDetails() {
  const { name } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { country, borders } = useSelector((state: RootState) => state.country);

  useEffect(() => {
    if (name) {
      dispatch(getCountry(name));
    }
  }, [name]);

  useEffect(() => {
    if (!country) {
      dispatch(fetchCountries());
      setTimeout(() => {
        if (name) {
          dispatch(getCountry(name));
        }
      }, 1000);
    }
  }, [dispatch]);

  const viewBorderDetails = (border: string) => {
    dispatch(setCountryBorder(border));
  };

  const closeBorderDetails = () => {
    dispatch(closeCountryBorder());
  };

  if (country) {
    return (
      <Box>
        <Button
          onClick={() => navigate(`/`)}
          variant="text"
          sx={{ my: 2 }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ my: 3 }}
        >
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={country.flags["png"]}
              alt={country.name.common}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container rowSpacing={4} spacing={2}>
              <Grid item xs={12} md={12}>
                <CountryData country={country} />
              </Grid>
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <Grid container rowSpacing={1}>
                  <Grid item xs={12} md={"auto"}>
                    <Typography variant="body2">Border Countries : </Typography>
                  </Grid>
                  <Grid item sx={{ display: "flex" }}>
                    {country.borders?.map((border) => (
                      <Typography
                        onClick={() => viewBorderDetails(border)}
                        variant="body2"
                        color="text.secondary"
                        key={border}
                        sx={{
                          mr: 1,
                          boxShadow: 2,
                          px: 1,
                          borderRadius: 1,
                          cursor: "pointer",
                        }}
                      >
                        {border}
                      </Typography>
                    )) || <Typography variant="body2"> N/A </Typography>}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog open={borders.open}>
          {borders.country ? (
            <>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    image={borders.country.flags["png"]}
                    alt={country.name.common}
                  />
                  <CountryData country={borders.country} />
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => closeBorderDetails()}
                    variant="text"
                    sx={{ my: 2 }}
                    endIcon={<CloseIcon />}
                  >
                    Close
                  </Button>
                </CardActions>
              </Card>
            </>
          ) : (
            ""
          )}
        </Dialog>
      </Box>
    );
  } else {
    return (
      <Grid item sm={12} sx={{ textAlign: "center" }}>
        <CircularProgress disableShrink />
      </Grid>
    );
  }
}
