import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeColor,
  getStorageTheme,
} from "#src/features/theme";
import React from "react";

type TypeHomeProps = {
  setActualTheme: (value: string) => void;
  actualTheme: string;
};
const Home = () => {
  // const [actualTheme, setActualTheme] = React.useState(getStorageTheme);
  // const handleToggleTheme = () => {
  //   const newThemeColor =
  //     actualTheme === ThemeColor.DARK ? ThemeColor.LIGHT : ThemeColor.DARK;
  //   setActualTheme(newThemeColor);
  //   localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThemeColor);
  // };
  return (
    <div>
      {/* <button onClick={handleToggleTheme}>theme-change</button> */}
      <button>toggleTheme</button>
    </div>
  );
};

export default Home;
