import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import { Header } from "../scripts/Header.jsx";
import { Destination } from "./Destination";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Destination />
  </React.StrictMode>,
  document.getElementById("root")
);
