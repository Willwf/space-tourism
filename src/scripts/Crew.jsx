import { useEffect, useState } from "react";
import "../styles/Crew.scss";

function Crew() {
  const [crewMemberIndex, setCrewMemberIndex] = useState(0);
  const [crewMember, setCrewMember] = useState("douglas hurley");

  const [crewMemberDouglas, setCrewMemberDouglas] = useState(true);
  const [crewMemberMark, setCrewMemberMark] = useState(false);
  const [crewMemberVictor, setCrewMemberVictor] = useState(false);
  const [crewMemberAnousheh, setCrewMemberAnousheh] = useState(false);

  const [name, setName] = useState("");
  const [imgPngUrl, setImgPngUrl] = useState("");
  const [imgWebpUrl, setImgWebpUrl] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setCrewMember(data.crew[crewMemberIndex].name.toLowerCase());

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

  useEffect(() => {
    if (crewMember === "douglas hurley") {
      setCrewMemberDouglas(true);
      setCrewMemberMark(false);
      setCrewMemberVictor(false);
      setCrewMemberAnousheh(false);
    }
    if (crewMember === "mark shuttleworth") {
      setCrewMemberDouglas(false);
      setCrewMemberMark(true);
      setCrewMemberVictor(false);
      setCrewMemberAnousheh(false);
    }
    if (crewMember === "victor glover") {
      setCrewMemberDouglas(false);
      setCrewMemberMark(false);
      setCrewMemberVictor(true);
      setCrewMemberAnousheh(false);
    }
    if (crewMember === "anousheh ansari") {
      setCrewMemberDouglas(false);
      setCrewMemberMark(false);
      setCrewMemberVictor(false);
      setCrewMemberAnousheh(true);
    }
  }, [crewMember]);

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
            className={`sliderCircle ${crewMemberDouglas ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
          <li
            data-index="1"
            className={`sliderCircle ${crewMemberMark ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
          <li
            data-index="2"
            className={`sliderCircle ${crewMemberVictor ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
          <li
            data-index="3"
            className={`sliderCircle ${crewMemberAnousheh ? "active" : ""}`}
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
