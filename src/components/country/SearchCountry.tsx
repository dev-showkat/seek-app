import { useEffect, useState, ChangeEvent } from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SearchCountry({
  findCountryByName,
  findCountryByRegion,
}: {
  findCountryByName: any;
  findCountryByRegion: any;
}) {
  const regions = [
    "Europe",
    "Americas",
    "Africa",
    "Oceania",
    "Asia",
    "Antarctic",
  ];
  const [full, setFull] = useState(window.innerWidth < 600 ? true : false);

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setFull(true);
    } else {
      setFull(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setFull(true);
    } else {
      setFull(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onChangeRegion = (event: SelectChangeEvent) => {
    const { value } = event.target;
    findCountryByRegion(value);
  };

  const searchCountryByName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    findCountryByName(value);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={1}
        my={1}
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="searchByName"
            placeholder="Search for a country..."
            size="small"
            fullWidth={full}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={searchCountryByName}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "end" }}>
          <FormControl sx={{ minWidth: full ? "100%" : 270 }} size="small">
            <Select
              defaultValue={"selectRegion"}
              onChange={onChangeRegion}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"selectRegion"}>
                <Typography variant="body2" color="text.secondary">
                  Select by Region
                </Typography>
              </MenuItem>
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
