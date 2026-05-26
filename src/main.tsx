import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ScrollToTop from "./lib/utils.ts";

createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.Fragment>,
);
