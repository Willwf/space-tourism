// import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.scss";

function Header({ actualPage }) {
  const [isActive, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <a href="/" className="homeLogo">
        <img src="./assets/shared/logo.svg" alt="Logo" />
      </a>
      <div className="line"></div>
      <div className="hamburguerMenu">
        <a
          onClick={handleMenu}
          className={`icon ${isActive ? "inactive" : ""}`}
        >
          <img src="./assets/shared/icon-hamburger.svg" alt="Hamburger Icon" />
        </a>
        <nav className={`links ${isActive ? "active" : ""}`}>
          <a className="icon close">
            <img
              onClick={handleMenu}
              src="./assets/shared/icon-close.svg"
              alt="Close Hamburger Menu"
            />
          </a>
          <ul>
            <li className={actualPage === "home" ? "active" : ""}>
              <a href="/">
                <span>00 </span>Home
              </a>
              {/* <Link to="/">00 Home</Link> */}
            </li>
            <li className={actualPage === "destination" ? "active" : ""}>
              <a href="destination">
                <span>01 </span>Destination
              </a>
              {/* <Link to="/destination">01 Destination</Link> */}
            </li>
            <li className={actualPage === "crew" ? "active" : ""}>
              <a href="crew">
                <span>02 </span>Crew
              </a>
              {/* <Link to="/crew">02 Crew</Link> */}
            </li>
            <li className={actualPage === "technology" ? "active" : ""}>
              <a href="technology">
                <span>03 </span>Technology
              </a>
              {/* <Link to="/technology">03 Technology</Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
