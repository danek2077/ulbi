import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkSvg from "#src/shared/assets/svg/theme-dark 1.svg";
import LightSvg from "#src/shared/assets/svg/theme-light 1.svg";
import { changeColorTheme } from "#src/features/theme/themeSlice";
import { RootState } from "#src/shared/reduxTypes/reduxTypes";
import * as styles from "./ThemeChangeBtn.module.scss";
const ThemeChangeBtn = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector(
    (root: RootState) => root.themeSlice.themeColor
  );
  const handleToggleTheme = () => {
    dispatch(changeColorTheme());
  };
  return (
    <button onClick={handleToggleTheme} className={styles.nullerForBtn}>
      {themeColor === "light" ? <LightSvg /> : <DarkSvg />}
    </button>
  );
};

export default ThemeChangeBtn;
