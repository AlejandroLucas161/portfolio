import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { IconContext } from "react-icons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: "#5b7f9e" }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
