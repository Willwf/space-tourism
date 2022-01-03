import { useEffect, useState } from "react";
import "../styles/Technology.scss";

function Technology() {
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const [name, setName] = useState("");
  const [imgPortrait, setImgPortrait] = useState("");
  const [imgLandscape, setImgLandscape] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setName(data.technology[technologyIndex].name);
        setImgPortrait(data.technology[technologyIndex].images.portrait);
        setImgLandscape(data.technology[technologyIndex].images.landscape);
        setDescription(data.technology[technologyIndex].description);
      });
  }, [technologyIndex]);

  function handleToggle(event) {
    setTechnologyIndex(Number(event.target.dataset.index));
  }

  return (
    <main>
      <h2>
        <span>03</span> Space Launch 101
      </h2>
      <div className="imgContainer">
        <img src={imgLandscape} alt={name} />
      </div>
      <nav>
        <ul>
          <li
            data-index="0"
            onClick={handleToggle}
            className={technologyIndex === 0 ? "active" : ""}
          >
            1
          </li>
          <li
            data-index="1"
            onClick={handleToggle}
            className={technologyIndex === 1 ? "active" : ""}
          >
            2
          </li>
          <li
            data-index="2"
            onClick={handleToggle}
            className={technologyIndex === 2 ? "active" : ""}
          >
            3
          </li>
        </ul>
      </nav>
      <h3>The Terminology...</h3>
      <h1>{name}</h1>
      <p>{description}</p>
    </main>
  );
}

export { Technology };
