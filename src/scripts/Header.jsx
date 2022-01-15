import { Link } from "react-router-dom";
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
              <Link href="/">
                <span>00 </span>Home
              </Link>
              {/* <Link to="/">00 Home</Link> */}
            </li>
            <li className={actualPage === "destination" ? "active" : ""}>
              <Link href="destination">
                <span>01 </span>Destination
              </Link>
              {/* <Link to="/destination">01 Destination</Link> */}
            </li>
            <li className={actualPage === "crew" ? "active" : ""}>
              <Link href="crew">
                <span>02 </span>Crew
              </Link>
              {/* <Link to="/crew">02 Crew</Link> */}
            </li>
            <li className={actualPage === "technology" ? "active" : ""}>
              <Link href="technology">
                <span>03 </span>Technology
              </Link>
              {/* <Link to="/technology">03 Technology</Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
