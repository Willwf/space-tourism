import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../scripts/Header.jsx";

import { Homepage } from "./Homepage.jsx";
import { Destination } from "./Destination";
import { Technology } from "./Technology";
import { Crew } from "./Crew";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
