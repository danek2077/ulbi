import { Home } from "#src/pages/home";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";
const Counter = React.lazy(() =>
  import("#src/pages/counter").then(({ Counter }) => ({
    default: Counter,
  }))
);
export const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Counter />
          </React.Suspense>
        ),
      },
    ],
  },
]);
