import React from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeColor,
} from "../App/hooks/changeThemeHook";
type TypeHomeProps = {
  setActualTheme: (value: string) => void;
  actualTheme: string;
};
const Home = ({ setActualTheme, actualTheme }: TypeHomeProps) => {
  const handleToggleTheme = () => {
    const newThemeColor =
      actualTheme === ThemeColor.DARK ? ThemeColor.LIGHT : ThemeColor.DARK;
    setActualTheme(newThemeColor);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThemeColor);
  };
  return (
    <div>
      <button onClick={handleToggleTheme}>theme-change</button>
    </div>
  );
};

export default Home;
