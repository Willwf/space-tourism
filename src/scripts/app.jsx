import "../styles/index.scss";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../scripts/Header.jsx";

import { Homepage } from "./Homepage.jsx";
import { Destination } from "./Destination";
import { Technology } from "./Technology";
import { Crew } from "./Crew";

function App() {
  const [actualPage, setActualPage] = useState("home");

  return (
    <>
      <Header actualPage={actualPage} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage setActualPage={setActualPage} />}
          />
          <Route path="crew" element={<Crew setActualPage={setActualPage} />} />
          <Route
            path="technology"
            element={<Technology setActualPage={setActualPage} />}
          />
          <Route
            path="destination"
            element={<Destination setActualPage={setActualPage} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
