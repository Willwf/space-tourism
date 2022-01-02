import { useState } from "react";
import "../styles/Header.scss";

function Header() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <a href="#home" className="homeLogo">
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
              <a href="#home">00 Home</a>
            </li>
            <li>
              <a href="#destination">01 Destination</a>
            </li>
            <li>
              <a href="#crew">02 Crew</a>
            </li>
            <li>
              <a href="#technology">03 Technology</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
