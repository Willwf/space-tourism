// import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.scss";

function Header() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <a href="/" className="homeLogo">
        <img src="./assets/shared/logo.svg" alt="Logo" />
      </a>
      <div className="hamburguerMenu">
        <a
          onClick={handleToggle}
          className={`icon ${isActive ? "inactive" : ""}`}
        >
          <img src="./assets/shared/icon-hamburger.svg" alt="Hamburger Icon" />
        </a>
        <nav className={`links ${isActive ? "active" : ""}`}>
          <a className="icon close">
            <img
              onClick={handleToggle}
              src="./assets/shared/icon-close.svg"
              alt="Close Hamburger Menu"
            />
          </a>
          <ul>
            <li>
              <a href="/">00 Home</a>
              {/* <Link to="/">00 Home</Link> */}
            </li>
            <li>
              <a href="destination">01 Destination</a>
              {/* <Link to="/destination">01 Destination</Link> */}
            </li>
            <li>
              <a href="crew">02 Crew</a>
              {/* <Link to="/crew">02 Crew</Link> */}
            </li>
            <li>
              <a href="technology">03 Technology</a>
              {/* <Link to="/technology">03 Technology</Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
