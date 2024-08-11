import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./router";
import "../i18n/i18n";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
