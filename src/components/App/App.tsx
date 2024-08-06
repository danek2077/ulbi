import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { lazy } from "react";
import "../../styles/index.scss";
import { getStorageTheme } from "./hooks/changeThemeHook";
const Counter = lazy(() =>
  import("../Counter/Counter").then(({ Counter }) => ({
    default: Counter,
  }))
);
export const App: React.FC = () => {
  const [actualTheme, setActualTheme] = React.useState(getStorageTheme);

  return (
    <div className={`app ${actualTheme}`}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home setActualTheme={setActualTheme} actualTheme={actualTheme} />
            }
          ></Route>
          <Route
            path="counter"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Counter />
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
