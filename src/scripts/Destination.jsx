import { useEffect, useState } from "react";
import "../styles/Destination.scss";

function Destination() {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setName(data.destinations[0].name);
        setImgUrl(data.destinations[0].images.png);
        setDescription(data.destinations[0].description);
        setDistance(data.destinations[0].distance);
        setTravel(data.destinations[0].travel);
      });
  });

  return (
    <main>
      <h2>
        <span>01</span> Pick Your Destination
      </h2>
      <img src={imgUrl} alt={name} />
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
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="separationLine"></div>
      <h3>Avg. Distance</h3>
      <h4>{distance}</h4>
      <h3>Est. Travel Time</h3>
      <h4>{travel}</h4>
    </main>
  );
}

export { Destination };
