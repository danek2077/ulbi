import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home";
const Counter = React.lazy(() =>
  import("#src/pages/counter").then(({ Counter }) => ({
    default: Counter,
  }))
);

const router = createBrowserRouter([
  {
    element: <App />,
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

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
