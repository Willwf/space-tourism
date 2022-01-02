import { useEffect, useState } from "react";
import "../styles/Destination.scss";

function Destination() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [destinations, setDestinations] = useState("");
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destinations);
        setName(data.destinations[destinationIndex].name);
        setImgUrl(data.destinations[destinationIndex].images.png);
        setDescription(data.destinations[destinationIndex].description);
        setDistance(data.destinations[destinationIndex].distance);
        setTravel(data.destinations[destinationIndex].travel);
      });
  }, [destinationIndex]);

  function handleToggle(event) {
    const destinationSelected = event.target.innerText.toLowerCase();
    destinations.forEach((destination, index) => {
      if (destination.name.toLowerCase() === destinationSelected) {
        setDestinationIndex(index);
      }
    });
  }

  return (
    <main>
      <h2>
        <span>01</span> Pick Your Destination
      </h2>
      <img src={imgUrl} alt={name} />
      <nav>
        <ul>
          <li className="active" onClick={handleToggle}>
            <a href="#">Moon</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#">Mars</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#">Europa</a>
          </li>
          <li onClick={handleToggle}>
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
