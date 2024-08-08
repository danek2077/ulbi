export const LOCAL_STORAGE_THEME_KEY = "theme-selected";
export enum enumThemeColor {
  DARK = "dark",
  LIGHT = "light",
}
export const getStorageTheme =
  localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || enumThemeColor.LIGHT;
