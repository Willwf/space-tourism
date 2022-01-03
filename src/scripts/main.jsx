import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import { Header } from "../scripts/Header.jsx";
import { Technology } from "../scripts/Technology.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Technology />
  </React.StrictMode>,
  document.getElementById("root")
);
