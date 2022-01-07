import { useEffect, useState } from "react";
import "../styles/Destination.scss";

function Destination() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [destinations, setDestinations] = useState("");
  const [destination, setDestination] = useState("moon");

  const [destinationMoon, setDestinationMoon] = useState(true);
  const [destinationMars, setDestinationMars] = useState(false);
  const [destinationEuropa, setDestinationEuropa] = useState(false);
  const [destinationTitan, setDestinationTitan] = useState(false);

  const [name, setName] = useState("");
  const [imgPngUrl, setImgPngUrl] = useState("");
  const [imgWebpUrl, setImgWebpUrl] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destinations);
        setName(data.destinations[destinationIndex].name);
        setImgPngUrl(data.destinations[destinationIndex].images.png);
        setImgWebpUrl(data.destinations[destinationIndex].images.webp);
        setDescription(data.destinations[destinationIndex].description);
        setDistance(data.destinations[destinationIndex].distance);
        setTravel(data.destinations[destinationIndex].travel);
      });
  }, [destinationIndex]);

  function handleToggle(event) {
    const destinationSelected = event.target.innerText.toLowerCase();
    destinations.forEach((item, index) => {
      if (item.name.toLowerCase() === destinationSelected) {
        setDestinationIndex(index);
        setDestination(item.name.toLowerCase());
      }
    });
  }

  useEffect(() => {
    if (destination === "moon") {
      setDestinationMoon(true);
      setDestinationMars(false);
      setDestinationEuropa(false);
      setDestinationTitan(false);
    }
    if (destination === "mars") {
      setDestinationMoon(false);
      setDestinationMars(true);
      setDestinationEuropa(false);
      setDestinationTitan(false);
    }
    if (destination === "europa") {
      setDestinationMoon(false);
      setDestinationMars(false);
      setDestinationEuropa(true);
      setDestinationTitan(false);
    }
    if (destination === "titan") {
      setDestinationMoon(false);
      setDestinationMars(false);
      setDestinationEuropa(false);
      setDestinationTitan(true);
    }
  }, [destination]);

  useEffect(() => {
    document.body.classList.add("bg-destination");

    return () => {
      document.body.classList.remove("bg-destination");
    };
  });

  return (
    <main className="destination">
      <h2 className="destination phrase">
        <span>01</span> Pick Your Destination
      </h2>
      <img
        className="destination image"
        srcSet={`${imgWebpUrl}, ${imgPngUrl}`}
        alt={name}
      />
      <nav className="destination selector">
        <ul>
          <li
            className={destinationMoon ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Moon</a>
          </li>
          <li
            className={destinationMars ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Mars</a>
          </li>
          <li
            className={destinationEuropa ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Europa</a>
          </li>
          <li
            className={destinationTitan ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Titan</a>
          </li>
        </ul>
      </nav>
      <h1 className="destination title">{name}</h1>
      <p className="destination description">{description}</p>
      <div className="separationLine"></div>
      <h3 className="destination infoTitle">Avg. Distance</h3>
      <h4 className="destination infoValue">{distance}</h4>
      <h3 className="destination infoTitle">Est. Travel Time</h3>
      <h4 className="destination infoValue">{travel}</h4>
    </main>
  );
}

export { Destination };
