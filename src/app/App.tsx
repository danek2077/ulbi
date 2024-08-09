import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../app/styles/index.scss";
import { getStorageTheme } from "../features/theme";
import { useSelector } from "react-redux";
import { RootState } from "#src/shared/reduxTypes/reduxTypes";
import LinkUi from "#src/shared/ui/link-button-router/LinkUi";
import { NavBar } from "#src/widgets/NavBar";

export const App: React.FC = () => {
  const themeColor = useSelector(
    (state: RootState) => state.themeSlice.themeColor
  );
  return (
    <div className={`app ${themeColor}`}>
      <NavBar />
      <Outlet />
    </div>
  );
};
