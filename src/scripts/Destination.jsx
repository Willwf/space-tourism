import { useEffect, useState } from "react";
import "../styles/Destination.scss";

function Destination() {
  const [destinationIndex, setDestinationIndex] = useState(0);

  const [name, setName] = useState("");
  const [imgPngUrl, setImgPngUrl] = useState("");
  const [imgWebpUrl, setImgWebpUrl] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    document.body.classList.add("bg-destination");

    return () => {
      document.body.classList.remove("bg-destination");
    };
  });

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setName(data.destinations[destinationIndex].name);
        setImgPngUrl(data.destinations[destinationIndex].images.png);
        setImgWebpUrl(data.destinations[destinationIndex].images.webp);
        setDescription(data.destinations[destinationIndex].description);
        setDistance(data.destinations[destinationIndex].distance);
        setTravel(data.destinations[destinationIndex].travel);
      });
  }, [destinationIndex]);

  function handleToggle(event) {
    setDestinationIndex(Number(event.target.dataset.index));
  }

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
            data-index="0"
            className={destinationIndex === 0 ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Moon</a>
          </li>
          <li
            data-index="1"
            className={destinationIndex === 1 ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Mars</a>
          </li>
          <li
            data-index="2"
            className={destinationIndex === 2 ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Europa</a>
          </li>
          <li
            data-index="3"
            className={destinationIndex === 3 ? "active" : ""}
            onClick={handleToggle}
          >
            <a>Titan</a>
          </li>
        </ul>
      </nav>
      <h1 className="destination title">{name}</h1>
      <p className="destination description">{description}</p>
      <div className="separationLine"></div>
      <div className="destination info">
        <div className="destination distance">
          <h3 className="destination infoTitle">Avg. Distance</h3>
          <h4 className="destination infoValue">{distance}</h4>
        </div>
        <div className="destination travelTime">
          <h3 className="destination infoTitle">Est. Travel Time</h3>
          <h4 className="destination infoValue">{travel}</h4>
        </div>
      </div>
    </main>
  );
}

export { Destination };
