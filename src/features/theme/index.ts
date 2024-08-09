export const LOCAL_STORAGE_THEME_KEY = "theme-selected";

export const getStorageTheme =
  localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || "light";
export const getStorageThemeOpposite =
  localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === "light"
    ? "dark"
    : "light" || "dark";
