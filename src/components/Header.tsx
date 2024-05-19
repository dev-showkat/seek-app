import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);

  const changeTheme = () => {
    const { mode } = theme.palette;
    dispatch(setTheme(mode === "light" ? "dark" : "light"));
  };

  return (
    <Box sx={{ py: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 600 }}>Where in the World?</Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "end" }}>
          <Typography
            onClick={() => changeTheme()}
            sx={{ display: "inline-flex", cursor: "pointer" }}
          >
            <DarkModeIcon sx={{ marginX: 1 }} />
            {theme?.palette?.mode === "dark" ? "light" : "dark"} Mode
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
