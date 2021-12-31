import "../styles/App.scss";

function App() {
  return (
    <div id="App">
      <header>
        <a href="#home">
          <img src="./assets/shared/logo.svg" alt="Logo" />
        </a>

        <a class="icon">
          <img src="./assets/shared/icon-hamburger.svg" alt="Hamburger Icon" />
        </a>

        <div className="links">
          <a href="#home">00 Home</a>
          <a href="#destination">01 Destination</a>
          <a href="#crew">02 Crew</a>
          <a href="#technology">03 Technology</a>
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
        <button>Explore</button>
      </main>
    </div>
  );
}

export default App;
