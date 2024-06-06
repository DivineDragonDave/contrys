import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { Themes } from "./components/Themes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Themes>
    <App />
  </Themes>
);
