import "../styles/App.scss";

function App() {
  return (
    <div id="App">
      <header>
        <a href="#home" className="homeLogo">
          <img src="./assets/shared/logo.svg" alt="Logo" />
        </a>
        <div className="hamburguerMenu">
          <a class="icon inactive">
            <img
              src="./assets/shared/icon-hamburger.svg"
              alt="Hamburger Icon"
            />
          </a>
          <nav className="links active">
            <a class="icon close">
              <img
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
      <main>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
        <a href="#">Explore</a>
      </main>
    </div>
  );
}

export default App;
