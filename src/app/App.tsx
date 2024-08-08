import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../app/styles/index.scss";
import { getStorageTheme } from "../features/theme";
import { useSelector } from "react-redux";
import { RootState } from "#src/shared/reduxTypes/reduxTypes";

export const App: React.FC = () => {
  const themeColor = useSelector(
    (state: RootState) => state.themeSlice.themeColor
  );
  return (
    <div className={`app ${themeColor}`}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </div>
  );
};
