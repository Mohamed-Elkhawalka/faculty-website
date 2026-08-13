import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./app/routes";
import "./styles/variables.css";
import "./styles/globals.css";
import "./i18n/i18n";
import DirectionHandler from "./Components/DirectionHandler";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DirectionHandler />
    <RouterProvider router={router} />
  </StrictMode>
);
