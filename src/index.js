import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LinksContextProvider } from "./data/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LinksContextProvider>
    <App />
  </LinksContextProvider>
);
