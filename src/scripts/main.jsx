import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import { Header } from "../scripts/Header.jsx";
import { HomePage } from "./Homepage";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
