import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "../app/styles/index.scss";
import { useSelector } from "react-redux";
import { RootState } from "#src/shared/reduxTypes/reduxTypes";
import { NavBar } from "#src/widgets/NavBar";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";

export const App: React.FC = () => {
  const { t } = useTranslation();

  const themeColor = useSelector(
    (state: RootState) => state.themeSlice.themeColor
  );

  return (
    <div className={`app ${themeColor}`}>
      <Suspense fallback="loading...">
        <NavBar />
        <Outlet />
      </Suspense>
    </div>
  );
};
