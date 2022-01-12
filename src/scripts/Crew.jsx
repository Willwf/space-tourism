import { useEffect, useState } from "react";
import "../styles/Crew.scss";

function Crew({ setActualPage }) {
  const [crewMemberIndex, setCrewMemberIndex] = useState(0);

  const [name, setName] = useState("");
  const [imgPngUrl, setImgPngUrl] = useState("");
  const [imgWebpUrl, setImgWebpUrl] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    document.body.classList.add("bg-crew");
    setActualPage("crew");

    return () => {
      document.body.classList.remove("bg-crew");
    };
  });

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
    <main className="crew">
      <h2 className="crew phrase">
        <span>02</span> Meet Your Crew
      </h2>
      <div className="crew imgContainer">
        <img srcSet={`${imgWebpUrl}, ${imgPngUrl}`} alt={`${name}'s Picture`} />
      </div>
      <nav className="crew selector">
        <ul>
          <li
            data-index="0"
            className={`sliderCircle ${crewMemberIndex === 0 ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
          <li
            data-index="1"
            className={`sliderCircle ${crewMemberIndex === 1 ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
          <li
            data-index="2"
            className={`sliderCircle ${crewMemberIndex === 2 ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
          <li
            data-index="3"
            className={`sliderCircle ${crewMemberIndex === 3 ? "active" : ""}`}
            onClick={handleToggle}
          ></li>
        </ul>
      </nav>
      <h3 className="crew role">{role}</h3>
      <h1 className="crew memberName">{name}</h1>
      <p className="crew bio">{bio}</p>
    </main>
  );
}

export { Crew };
