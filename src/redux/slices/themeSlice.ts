import { createTheme } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../interfaces/theme";

const initialState: ThemeState = {
  theme: createTheme({
    palette: {
      mode: "light",
    },
  }),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getTheme: (state) => {
      return state.theme;
    },
    setTheme: (state, { payload }: { payload: "dark" | "light" }) => {
      state.theme = createTheme({
        palette: {
          mode: payload,
        },
      });
    },
  },
});

export const { getTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
