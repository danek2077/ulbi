import LinkUi from "#src/shared/ui/link-button-router/LinkUi";
import React from "react";
import * as styles from "./NavBar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "#src/shared/reduxTypes/reduxTypes";
import { customHookNav } from "../model/LinkStylesLogic";
import ThemeChangeBtn from "./ThemeChangeBtn";

const NavBar = () => {
  const { pathname } = useLocation();
  const { counterLinkStyle, homeLinkStyle } = customHookNav(pathname);
  const themeColorOpposite = useSelector(
    (state: RootState) => state.themeSlice.themeColorOpposite
  );
  return (
    <div className={`${themeColorOpposite}`}>
      <div className="container">
        <nav className={styles.nav}>
          <ThemeChangeBtn />
          <div>
            <LinkUi to="/counter" className={[counterLinkStyle, styles.link1]}>
              Counter
            </LinkUi>
            <LinkUi to="/" className={homeLinkStyle}>
              Home
            </LinkUi>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
