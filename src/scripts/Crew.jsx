import { useEffect, useState } from "react";
import "../styles/Crew.scss";

function Crew() {
  const [crewMemberIndex, setCrewMemberIndex] = useState(0);

  const [name, setName] = useState("");
  const [imgPngUrl, setImgPngUrl] = useState("");
  const [imgWebpUrl, setImgWebpUrl] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setName(data.crew[crewMemberIndex].name);
        setImgPngUrl(data.crew[crewMemberIndex].images.png);
        setImgWebpUrl(data.crew[crewMemberIndex].images.webp);
        setRole(data.crew[crewMemberIndex].role);
        setBio(data.crew[crewMemberIndex].bio);
      });
  }, [crewMemberIndex]);

  function handleToggle(event) {
    setCrewMemberIndex(Number(event.target.dataset.index));
  }

  return (
    <main>
      <h2>
        <span>02</span> Meet Your Crew
      </h2>
      <div className="imgContainer">
        <img srcSet={`${imgWebpUrl}, ${imgPngUrl}`} alt={`${name}'s Picture`} />
      </div>
      <nav>
        <ul>
          <li
            data-index="0"
            className={crewMemberIndex === 0 ? "active" : ""}
            onClick={handleToggle}
          ></li>
          <li
            data-index="1"
            className={crewMemberIndex === 1 ? "active" : ""}
            onClick={handleToggle}
          ></li>
          <li
            data-index="2"
            className={crewMemberIndex === 2 ? "active" : ""}
            onClick={handleToggle}
          ></li>
          <li
            data-index="3"
            className={crewMemberIndex === 3 ? "active" : ""}
            onClick={handleToggle}
          ></li>
        </ul>
      </nav>
      <h3>{role}</h3>
      <h1>{name}</h1>
      <p>{bio}</p>
    </main>
  );
}

export { Crew };
