import "../styles/Crew.scss";

function Crew() {
  return (
    <main>
      <h2>
        <span>02</span> Meet Your Crew
      </h2>
      <div className="imgContainer">
        <img
          srcset="../assets/crew/image-douglas-hurley.webp"
          alt="Douglas Hurley's Picture"
        />
      </div>
      <nav>
        <ul>
          <li className="sliderCircle active"></li>
          <li className="sliderCircle"></li>
          <li className="sliderCircle"></li>
          <li className="sliderCircle"></li>
        </ul>
      </nav>
      <h3>Commander</h3>
      <h1>Douglas Hurley</h1>
      <p>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </main>
  );
}

export { Crew };
