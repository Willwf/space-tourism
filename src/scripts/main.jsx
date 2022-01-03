import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import { Header } from "../scripts/Header.jsx";
import { Crew } from "../scripts/Crew.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Crew />
  </React.StrictMode>,
  document.getElementById("root")
);
