import {
  LOCAL_STORAGE_THEME_KEY,
  enumThemeColor,
  getStorageTheme,
} from "#src/features/theme";
import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  themeColor: string;
}

const initialState: themeState = {
  themeColor: getStorageTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColorTheme: (state) => {
      const newColor =
        state.themeColor === enumThemeColor.DARK
          ? enumThemeColor.LIGHT
          : enumThemeColor.DARK;
      state.themeColor = newColor;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newColor);
    },
  },
});

export const { changeColorTheme } = themeSlice.actions;

export default themeSlice.reducer;
