import {
  LOCAL_STORAGE_THEME_KEY,
  getStorageTheme,
  getStorageThemeOpposite,
} from "#src/features/theme";
import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  themeColor: string;
  themeColorOpposite: string;
}
const initialState: themeState = {
  themeColor: getStorageTheme,
  themeColorOpposite: getStorageThemeOpposite,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColorTheme: (state) => {
      const newColor = state.themeColor === "dark" ? "light" : "dark";
      state.themeColor = newColor;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newColor);
      state.themeColorOpposite = state.themeColor === "dark" ? "light" : "dark";
    },
  },
});

export const { changeColorTheme } = themeSlice.actions;

export default themeSlice.reducer;
