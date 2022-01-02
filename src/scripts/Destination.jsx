import "../styles/Destination.scss";

function Destination() {
  return (
    <main>
      <h2>
        <span>01</span> Pick Your Destination
      </h2>
      <img src="../assets/destination/image-moon.webp" alt="Moon" />
      <nav>
        <ul>
          <li>
            <a href="#">Moon</a>
          </li>
          <li>
            <a href="#">Mars</a>
          </li>
          <li>
            <a href="#">Europa</a>
          </li>
          <li>
            <a href="#">Titan</a>
          </li>
        </ul>
      </nav>
      <h1>Moon</h1>
      <p>
        See our planet as you've never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you're
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div className="separationLine"></div>
      <h3>Avg. Distance</h3>
      <h4>384,400 KM</h4>
      <h3>Est. Travel Time</h3>
      <h4>3 Days</h4>
    </main>
  );
}

export { Destination };
