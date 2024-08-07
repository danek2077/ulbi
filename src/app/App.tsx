import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../app/styles/index.scss";
import { getStorageTheme } from "../features/theme";



export const App: React.FC = () => {

  return (
    <div className={`app`}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <Outlet/>
        </ul>
      </div>
    </div>
  );
};
